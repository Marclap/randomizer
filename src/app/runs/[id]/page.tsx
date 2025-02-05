'use client'

import AnimatedSplits from '@/components/animated-splits'
import CombinatorialInfo from '@/components/combinatorial-info'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TITLES } from '@/constants'
import { generateSplitsFile } from '@/functions/generate-splits-file'
import { getRandomizerSplits } from '@/functions/randomizer-order'
import { useParams } from 'next/navigation'
import { useCallback, useState } from 'react'

export default function Runs() {
  const { id } = useParams()
  const [splits, setSplits] = useState<SplitInfo[]>([])
  const [isGenerated, setIsGenerated] = useState(false)

  const handleDownload = useCallback(async () => {
    await generateSplitsFile(splits, id as string)
  }, [splits, id])

  const generateSplits = useCallback(() => {
    if (typeof id === 'string') {
      const newSplits = getRandomizerSplits(id)
      setSplits(newSplits)
      setIsGenerated(true)
    }
  }, [id])

  return (
    <div className="w-full h-full flex flex-col items-center transition-all duration-300">
      <h3 className="text-2xl text-center font-semibold w-full uppercase my-8">
        {TITLES[id as string]}
      </h3>
      <div className="flex gap-4 mb-8">
        <Button onClick={generateSplits} aria-live="polite">
          Generate
        </Button>
        {isGenerated && splits.length > 0 && (
          <Button onClick={handleDownload}>Download</Button>
        )}
      </div>
      <ScrollArea className="h-auto max-h-[69vh] w-full max-w-2xl rounded-md border bg-background/90 backdrop-blur-sm">
        {isGenerated ? (
          <div className="p-4 space-y-2">
            {splits.length > 0 ? (
              <AnimatedSplits splits={splits} />
            ) : (
              <div className="text-muted-foreground text-center text-red-600 py-8">
                No splits generated
              </div>
            )}
          </div>
        ) : (
          <CombinatorialInfo run={id as string} />
        )}
      </ScrollArea>
    </div>
  )
}
