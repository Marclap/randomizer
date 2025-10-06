'use client'

import COMBINATORIAL_DATA from '@/constants/combinatorial-data'
import { PermutationDisplay } from './permutation-display'
import { RestrictionList } from './restriction-list'

const CombinatorialInfo = ({ run }: { run: string }) => {
  const data = COMBINATORIAL_DATA[run] as RunData | undefined

  if (!data) {
    return (
      <div className="text-center py-8 text-red-600 max-w-2xl mx-auto">
        Invalid run type:{' '}
        <code className="bg-muted px-2 py-1 rounded font-mono">{run}</code>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-11 text-lg font-semibold max-w-3xl mx-auto">
      <h3
        className="text-2xl font-bold text-center mb-7"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <div className="space-y-6">
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <PermutationDisplay value={data.unrestrictedPermutations} />
        {data.restrictions && (
          <RestrictionList restrictions={data.restrictions} />
        )}
        {data.notes?.map((note, i) => (
          <p
            key={i}
            className="text-lg bg-accent/20 p-4 rounded-md"
            dangerouslySetInnerHTML={{ __html: note }}
          />
        ))}
        <p className="text-lg">
          {data.restrictions
            ? 'Therefore, the total number of valid permutations is:'
            : 'The total number of possible permutations is:'}
        </p>
        <PermutationDisplay value={data.finalPermutations} />
      </div>
    </div>
  )
}

export default CombinatorialInfo
