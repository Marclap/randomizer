const CombinatorialInfo = ({ run }: { run: string }) => {
  const RUN_DATA: CombiantorialComplexityConfig = {
    elegy: {
      title: 'Combinatorial Complexity of Elegy%',
      description:
        'When randomizing the order of Elegy%, the number of possible unique permutations in which we can rescue the grubs is given by:',
      formula: '44! = 44 x 43 x 42 x ... x 2 x 1',
      specialNote:
        'Note that, although Grub City Collector All counts as 3 grubs in terms of points, it is treated as a single event in the permutation sequence. Therefore, the total number of points is still 44.',
      additionalInfo: (
        <p className="text-lg">
          This factorial operation results in approximately:
        </p>
      ),
      result: '2.7 x 10⁵⁴',
      comparisons: [
        'The estimated number of atoms in the observable universe (~10⁸⁰)',
        'The number of nanoseconds since the Big Bang (~10²⁶)',
        'The total number of possible chess positions (~10⁴⁷)',
      ],
    },
    worldsoul: {
      title: 'Combinatorial Complexity of Worldsoul',
      description:
        'When randomizing the order of Worldsoul, the number of possible unique permutations in which we can obtain fragments is given by:',
      formula: '9! = 9 x 8 x 7 x ... x 2 x 1',
      specialNote:
        'However, there is one restriction: Sly Vessel Fragment 1 must be obtained before Sly Vessel Fragment 2. This condition reduces the total number of valid permutations.',
      additionalInfo: (
        <>
          <p className="text-lg">
            Without restrictions, the total number of permutations would be:
          </p>
          <div className="flex items-center justify-center space-x-2 bg-secondary/60 p-4 rounded-md shadow-sm">
            <code className="text-2xl font-mono text-white">9! = 362,880</code>
          </div>
          <p className="text-lg">
            With the restriction, only half of these permutations are valid,
            therefore, the total number of valid permutations is:
          </p>
        </>
      ),
      result: '9! / 2 = 181,440',
      comparisons: [
        'More than the number of seconds in two days (~172,800).',
        'Comparable to the number of words in a short novel.',
        'Far greater than the number of chess positions in a typical game (~10⁴⁰).',
      ],
    },
  }

  const data = RUN_DATA[run]

  if (!data) {
    return (
      <div className="text-muted-foreground text-center text-red-600 py-8">
        Invalid run type.
      </div>
    )
  }

  return (
    <div className="h-auto max-h-[69vh] w-full max-w-2xl rounded-md border bg-background/90 backdrop-blur-sm p-7 space-y-4">
      <h3 className="text-2xl font-bold text-center mb-4">{data.title}</h3>
      <div className="space-y-4">
        <p className="text-lg">{data.description}</p>
        <div className="flex items-center justify-center space-x-2 bg-secondary/60 p-4 rounded-md shadow-sm">
          <code className="text-2xl font-mono text-white">{data.formula}</code>
        </div>
        <p className="text-lg">{data.specialNote}</p>
        {data.additionalInfo && data.additionalInfo}
        <div className="flex items-center justify-center space-x-2 bg-secondary/60 p-4 rounded-md shadow-sm">
          <code className="text-2xl font-mono text-white">{data.result}</code>
        </div>
        <p className="text-sm italic mt-4">
          To put this in perspective, this number exceeds:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {data.comparisons.map((comparison, index) => (
            <li key={index}>{comparison}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CombinatorialInfo
