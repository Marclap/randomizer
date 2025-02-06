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
        44! = ~2.66 x 10<sup className="text-base">54</sup>
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
    title: 'Combinatorial Complexity of 16 Mask Shards',
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
        have specific restrictions. They must be obtained in the exact order{' '}
        <span className="font-mono font-extrabold">
          Sly Mask Shard 1 → Sly Mask Shard 2 → Sly Mask Shard 3 → Sly Mask
          Shard 4
        </span>
        , although they need not be consecutive. This restriction reduces the
        total number of valid permutations.
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
  allmasksallvessels: {
    title: 'Combinatorial Complexity of All Masks All Vessels',
    description:
      'When randomizing the order of obtaining All Masks All Vessels, the number of possible unique permutations is given by:',
    formula: '24! = 24 x 23 x 22 x ... x 2 x 1',
    specialNote: (
      <>
        However, there is some restriction:{' '}
        <p className="mr-2">
          - The vessels fragments{' '}
          <span className="font-mono font-extrabold">
            Sly Vessel Fragment 1 and Sly Vessel Fragment 2
          </span>{' '}
          have specific restrictions. They must be obtained in the exact order{' '}
          <span className="font-mono font-extrabold">
            Sly Vessel Fragment 1 → Sly Vessel Fragment 2
          </span>
          .
        </p>
        <p className="mt-2">
          - The Mask Shards{' '}
          <span className="font-mono font-extrabold">
            Sly Mask Shard 1, Sly Mask Shard 2, Sly Mask Shard 3 and Sly Mask
            Shard 4
          </span>{' '}
          have specific restrictions. They must be obtained in the exact order{' '}
          <span className="font-mono font-extrabold">
            Sly Mask Shard 1 → Sly Mask Shard 2 → Sly Mask Shard 3 → Sly Mask
            Shard 4
          </span>
        </p>
        These restrictions reduce the total number of valid permutations.
      </>
    ),
    additionalInfo: (
      <>
        <p className="text-lg">
          Without restrictions, the total number of permutations would be:
        </p>
        <div className="flex items-center justify-center space-x-2 bg-secondary/60 p-4 rounded-md shadow-sm">
          <code className="text-2xl font-mono text-white">
            24! = ~6.2 x 10
            <sup className="text-sm">23</sup>
          </code>
        </div>
        <div className="text-lg">
          <p>
            However, due to the restrictions on the order of the Sly Vessel
            Fragments and Sly Mask Shards, only{' '}
            <span className="font-mono font-extrabold">
              1 out of every 48 permutations
            </span>{' '}
            is valid. This is because:
          </p>
          <p>
            - The 2 restricted Vessel Fragments can only appear in one specific
            order, reducing the total by a factor of{' '}
            <span className="font-mono font-extrabold">2</span>.
          </p>
          <p>
            - The 4 restricted Mask Shards can only appear in one specific
            order, reducing the total by a factor of{' '}
            <span className="font-mono font-extrabold">4! = 24</span>.
          </p>
          Therefore, the total number of permutations is reduced by a combined
          factor of{' '}
          <span className="font-mono font-extrabold">2 x 4! = 48</span>.
        </div>
      </>
    ),
    result: (
      <>
        24! / (2 x 4!) = ~1.29 x 10<sup className="text-sm">22</sup>
      </>
    ),
  },
}
