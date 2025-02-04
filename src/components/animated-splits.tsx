import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { useEffect, useState } from 'react'

export default function AnimatedSplits({
  splits,
  run,
}: {
  splits: SplitInfo[]
  run: string
}) {
  const [vesselIndexSplits, setVesselIndexSplits] = useState({})

  useEffect(() => {
    if (run === 'worldsoul') {
      splits.map((split, index) => {
        setVesselIndexSplits((prev) => ({ ...prev, [split.name]: index % 3 }))
      })
    }
  }, [run, splits])

  useEffect(() => {
    console.log(vesselIndexSplits)
  }, [vesselIndexSplits])
  return (
    <>
      {splits.map((split, index) => (
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
                  src={split?.img || ''}
                  alt={split?.name}
                  className="object-contain"
                />
                <AvatarFallback className="text-2xl bg-muted">
                  {split.name}
                </AvatarFallback>
              </Avatar>
              {split?.name}
            </div>
            {index < splits.length - 1 && <Separator className="mt-2" />}
          </div>
        </div>
      ))}
    </>
  )
}
