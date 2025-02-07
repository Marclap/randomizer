'use client'

import { RUN_DATA } from '@/constants/combinatorial'

const CombinatorialInfo = ({ run }: { run: string }) => {
  const data = RUN_DATA[run]

  if (!data) {
    return (
      <div className="text-muted-foreground text-center text-red-600 py-8">
        Invalid run type.
      </div>
    )
  }

  return <div className="p-7">{data}</div>
}

export default CombinatorialInfo
