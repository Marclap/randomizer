export const RUN_DATA: CombinatorialComplexityConfig = {
  elegy: {
    title: 'Combinatorial Complexity of Elegy%',
    description:
      'When randomizing the order of Elegy%, the number of possible unique permutations in which we can rescue the grubs is given by:',
    formula: '44! = 44 x 43 x 42 x ... x 2 x 1',
    specialNote: (
      <p>
        Note:{' '}
        <span className="font-mono font-extrabold">
          City Collector All Grubs
        </span>{' '}
        counts as 3 grubs in terms of points, it is treated as a single event in
        the permutation sequence. Therefore, the total number of points is still
        44.
      </p>
    ),
    additionalInfo: (
      <p className="text-lg">
        This factorial operation results in approximately:
      </p>
    ),
    result: (
      <>
        44! = 2.7 x 10<sup className="text-base">64</sup>
      </>
    ),
  },
  worldsoul: {
    title: 'Combinatorial Complexity of Worldsoul',
    description:
      'When randomizing the order of Worldsoul, the number of possible unique permutations in which we can obtain fragments is given by:',
    formula: '9! = 9 x 8 x 7 x ... x 2 x 1',
    specialNote: (
      <p>
        However, there is one restriction:{' '}
        <span className="font-mono font-extrabold">Sly Vessel Fragment 1</span>{' '}
        must be obtained before{' '}
        <span className="font-mono font-extrabold">Sly Vessel Fragment 2</span>.
        This condition reduces the total number of valid permutations.
      </p>
    ),
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
  },
  allstagstations: {
    title: 'Combinatorial Complexity of All Stag Stations',
    description:
      'When randomizing the order of obtain all Stag Stations, the number of possible unique permutations is given by:',
    formula: '9! = 9 x 8 x 7 x ... x 2 x 1',

    additionalInfo: (
      <>
        <p className="text-lg">The total number of possible permutations is:</p>
      </>
    ),
    result: '9! = 362,880',
  },
  allmaskshards: {
    title: 'Combinatorial Complexity of Mask Shards',
    description:
      'When randomizing the order of obtaining all 16 Mask Shards, the number of possible unique permutations is given by:',
    formula: '16! = 16 x 15 x 14 x ... x 2 x 1',
    specialNote: (
      <p>
        Note: The Mask Shards{' '}
        <span className="font-mono font-extrabold">
          Sly Mask Shard 1, Sly Mask Shard 2, Sly Mask Shard 3, and Sly Mask
          Shard 4
        </span>{' '}
        have specific restrictions. They must appear in the exact order{' '}
        <span className="font-mono font-extrabold">
          Sly Mask Shard 1 → Sly Mask Shard 2 → Sly Mask Shard 3 → Sly Mask
          Shard 4
        </span>
        , although they do not need to be consecutive. This restriction reduces
        the total number of valid permutations.
      </p>
    ),
    additionalInfo: (
      <>
        <p className="text-lg">
          Without restrictions, the total number of permutations would be:
        </p>
        <div className="flex items-center justify-center space-x-2 bg-secondary/60 p-4 rounded-md shadow-sm">
          <code className="text-2xl font-mono text-white">
            16! = 20,922,789,888,000
          </code>
        </div>
        <p className="text-lg">
          However, due to the restrictions on the order of the Sly Mask Shards,
          only{' '}
          <span className="font-mono font-extrabold">
            1 out of every 24 permutations
          </span>{' '}
          is valid. This is because the 4 restricted Mask Shards can only appear
          in one specific order, which reduces the total number of permutations
          by a factor of{' '}
          <span className="font-mono font-extrabold">4! = 24</span>.
        </p>
      </>
    ),
    result: '16! / 4! = 871,782,912,000',
  },
}
