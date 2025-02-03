'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { INFO_SPLITS } from '@/constants'
import { generateSplitsFile, getRandomizerSplits } from '@/functions'
import { useParams } from 'next/navigation'
import { useCallback, useState } from 'react'

export default function Runs() {
  const { id } = useParams()
  const [splits, setSplits] = useState<string[]>([])
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

  const animatedSplits = useCallback(
    () =>
      splits.map((split, index) => (
        <div
          key={`${split}-${index}`}
          className="space-y-2 relative opacity-0"
          style={{
            animation: 'slide-and-fade-in 0.5s ease forwards',
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <div className="text-sm  transition-colors p-2 rounded">
            <div className="flex flex-row items-center">
              <Avatar className="w-10 h-10 mx-4">
                <AvatarImage
                  src={INFO_SPLITS[split]?.img || ''}
                  alt={INFO_SPLITS[split]?.name}
                  className="object-contain"
                />
                <AvatarFallback className="text-2xl bg-muted">
                  {split}
                </AvatarFallback>
              </Avatar>
              {INFO_SPLITS[split]?.name.replace('&apos;', "'") || split}
            </div>
            {index < splits.length - 1 && <Separator className="mt-2" />}
          </div>
        </div>
      )),
    [splits]
  )

  return (
    <div className="w-full h-full flex flex-col items-center transition-all duration-300">
      <h3 className="text-2xl text-center font-semibold w-full uppercase my-8">
        {id}
      </h3>
      <div className="flex gap-4 mb-8">
        <Button onClick={generateSplits} aria-live="polite">
          Generate
        </Button>
        {isGenerated && <Button onClick={handleDownload}>Download</Button>}
      </div>
      {isGenerated && (
        <ScrollArea className="h-[80vh] w-full max-w-2xl rounded-md border bg-background/90 backdrop-blur-sm">
          <div className="p-4 space-y-2">
            {splits.length > 0 ? (
              animatedSplits()
            ) : (
              <div className="text-muted-foreground text-center py-8">
                No splits generated
              </div>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
