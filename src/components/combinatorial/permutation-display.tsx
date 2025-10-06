import { cn } from '@/lib/utils'

interface PermutationDisplayProps {
  value: string
  className?: string
}

export function PermutationDisplay({
  value,
  className,
}: PermutationDisplayProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-secondary p-4 rounded-md',
        className
      )}
    >
      <span
        className="text-2xl font-mono font-black"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  )
}
