import { CONFIG_RUN, ELEGY, INFO_SPLITS, LIVE_SPLIT_CONFIG } from '@/constants'

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

const uint8ToBase64 = (bytes: Uint8Array): string =>
  btoa(bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), ''))

async function fetchImageData(imageUrl: string): Promise<ArrayBuffer> {
  const response = await fetch(imageUrl)
  if (!response.ok) {
    throw new Error(
      `Failed to fetch image: ${response.status} ${response.statusText}`
    )
  }
  return response.arrayBuffer()
}

async function processImageForLiveSplit(
  imageBuffer: ArrayBuffer
): Promise<string> {
  try {
    const headerBytes = Uint8Array.from(
      atob(LIVE_SPLIT_CONFIG.HEADER_BASE64),
      (c) => c.charCodeAt(0)
    )
    const combinedBuffer = new Uint8Array(
      headerBytes.byteLength +
        LIVE_SPLIT_CONFIG.ICON_PREFIX.byteLength +
        imageBuffer.byteLength
    )
    combinedBuffer.set(headerBytes, 0)
    combinedBuffer.set(LIVE_SPLIT_CONFIG.ICON_PREFIX, headerBytes.byteLength)
    combinedBuffer.set(
      new Uint8Array(imageBuffer),
      headerBytes.byteLength + LIVE_SPLIT_CONFIG.ICON_PREFIX.byteLength
    )
    return uint8ToBase64(combinedBuffer)
  } catch (error) {
    throw new Error(
      `Image processing failed: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    )
  }
}

export async function createLiveSplitIconData(
  imageUrl: string
): Promise<string> {
  try {
    const imageData = await fetchImageData(imageUrl)
    return await processImageForLiveSplit(imageData)
  } catch (error) {
    console.error('LiveSplit icon generation error:', error)
    throw error
  }
}

export async function generateSplitsFile(splits: string[], category: string) {
  try {
    const segmentsPromises = splits.map(async (split) => {
      const splitInfo = INFO_SPLITS[split]
      if (!splitInfo) throw new Error(`Split info not found for: ${split}`)

      const icon = await createLiveSplitIconData(splitInfo.img)
      return `
        <Segment>
          <Name>${splitInfo.name}</Name>
          <Icon>${icon}</Icon>
          <SplitTimes>
            <SplitTime name="Personal Best"/>
          </SplitTimes>
          <BestSegmentTime/>
          <SegmentHistory/>
        </Segment>`
    })

    const segmentsContent = await Promise.all(segmentsPromises)
    const splitsContent = splits.map((split) => {
      const splitData = INFO_SPLITS[split].split
      return `<Split>${splitData}</Split>`
    })

    const runConfig = CONFIG_RUN[category]
    if (!runConfig)
      throw new Error(`Configuration not found for category: ${category}`)

    const xmlContent = `
      <?xml version="1.0" encoding="UTF-8"?>
      <Run version="1.7.0">
        <GameIcon/>
        <GameName>${runConfig.gameName}</GameName>
        <CategoryName>${runConfig.category}</CategoryName>
        <Metadata>
          <Run id=""/>
          <Platform usesEmulator="False"/>
          <Variables/>
        </Metadata>
        <Offset>00:00:00</Offset>
        <AttemptCount>0</AttemptCount>
        <AttemptHistory/>
        <Segments>
          ${segmentsContent.join('\n')}
        </Segments>
        <AutoSplitterSettings>
          <Ordered>True</Ordered>
          <AutosplitEndRuns>${
            runConfig.endTriggeringAutosplit
          }</AutosplitEndRuns>
          <AutosplitStartRuns/>
          <Splits>
            ${splitsContent.join('\n')}
          </Splits>
        </AutoSplitterSettings>
      </Run>`.trim()

    const blob = new Blob([xmlContent], { type: 'text/xml' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = `${category}.lss`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error generating splits file:', error)
    throw error
  }
}

export const getRandomizerSplits = (category: string) => {
  switch (category) {
    case 'elegy': {
      const shuffled = [...ELEGY]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1)
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      shuffled.push('GrubberflysElegy')
      return shuffled
    }
    default:
      return []
  }
}
