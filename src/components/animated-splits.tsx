'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

export default function AnimatedSplits({ splits }: { splits: SplitInfo[] }) {
  return (
    <>
      {splits.map((split) => (
        <div
          key={`${split.name}`}
          className="space-y-2 relative opacity-0"
          style={{
            animation: 'slide-and-fade-in 0.5s ease forwards',
            animationDelay: `${splits.indexOf(split) * 0.1}s`,
          }}
        >
          <div className="text-sm transition-colors p-1 rounded">
            <div className="flex flex-row items-center font-mono font-bold text-lg">
              <Avatar className="w-10 h-10 mx-4 rounded-none">
                <AvatarImage src={split.img} className="object-contain" />
                <AvatarFallback className="text-2xl bg-muted">
                  {split.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <span>{split.name}</span>
            </div>
            {splits.indexOf(split) < splits.length - 1 && (
              <Separator className="mt-2" />
            )}
          </div>
        </div>
      ))}
    </>
  )
}
