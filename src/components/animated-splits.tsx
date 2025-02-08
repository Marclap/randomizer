'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

export default function AnimatedSplits({ splits }: { splits: SplitInfo[] }) {
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
          <div className="text-sm transition-colors p-1 rounded">
            <div className="flex flex-row items-center font-mono font-bold text-lg">
              <Avatar className="w-10 h-10 mx-4 rounded-none">
                <AvatarImage
                  src={split.img}
                  alt={split.name}
                  className="object-contain"
                />
                <AvatarFallback className="text-2xl bg-muted">
                  {split.name}
                </AvatarFallback>
              </Avatar>
              {split.name}
            </div>
            {index < splits.length - 1 && <Separator className="mt-2" />}
          </div>
        </div>
      ))}
    </>
  )
}
