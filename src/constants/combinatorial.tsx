export const RUN_DATA: CombiantorialComplexityConfig = {
  elegy: {
    title: 'Combinatorial Complexity of Elegy%',
    description:
      'When randomizing the order of Elegy%, the number of possible unique permutations in which we can rescue the grubs is given by:',
    formula: '44! = 44 x 43 x 42 x ... x 2 x 1',
    specialNote: (
      <p>
        Note that, although{' '}
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
        2.7 x 10<sup className="text-base">64</sup>
      </>
    ),
    comparisons: [
      <>
        The estimated number of atoms in the observable universe{' '}
        <span className="font-mono font-extrabold">
          (~10<sup className="text-sm">80</sup>)
        </span>
      </>,
      <>
        The number of nanoseconds since the Big Bang{' '}
        <span className="font-mono font-extrabold">
          (~10<sup className="text-sm">26</sup>)
        </span>
      </>,
      <>
        The total number of possible chess positions{' '}
        <span className="font-mono font-extrabold">
          (~10<sup className="text-sm">47</sup>)
        </span>
      </>,
    ],
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
    comparisons: [
      <>
        More than the number of seconds in two days{' '}
        <span className="font-mono font-extrabold">(~172,800)</span>.
      </>,
      'Comparable to the number of words in a short novel.',
    ],
  },
}
