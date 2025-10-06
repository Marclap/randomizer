const COMBINATORIAL_DATA: Record<string, RunData> = {
  elegy: {
    title: 'Combinatorial Complexity of Elegy%',
    description:
      'When randomizing the order of <strong>Elegy%</strong>, the number of possible unique permutations in which we can rescue the grubs is given by:',
    totalItems: 44,
    unrestrictedPermutations: '44! = 44 × 43 × 42 × … × 2 × 1',
    finalPermutations: '44! ≈ 2.66 × 10<sup>54</sup>',
    notes: [
      '<strong>City Collector All Grubs</strong> counts as 3 grubs in terms of points, but it is treated as a single event in the permutation sequence. Therefore, the total number of points is still 44.',
    ],
  },
  worldsoul: {
    title: 'Combinatorial Complexity of Worldsoul',
    description:
      'When randomizing the order of <strong>Worldsoul</strong>, the number of possible unique permutations in which we can obtain fragments is given by:',
    totalItems: 9,
    unrestrictedPermutations: '9! = 362,880',
    restrictions: [
      {
        description:
          '<strong>Sly Vessel Fragment 1</strong> must be obtained before <strong>Sly Vessel Fragment 2</strong>.',
        factor: 2,
        explanation: 'This reduces valid permutations by half.',
      },
    ],
    finalPermutations: '9! / 2 = 181,440',
  },
  allstagstations: {
    title: 'Combinatorial Complexity of All Stag Stations',
    description:
      'When randomizing the order of obtain <strong>All Stag Stations</strong>, the number of possible unique permutations is given by:',
    totalItems: 9,
    unrestrictedPermutations: '9! = 9 × 8 × 7 × … × 2 × 1',
    finalPermutations: '9! = 362,880',
  },
  allmaskshards: {
    title: 'Combinatorial Complexity of 16 Mask Shards',
    description:
      'When randomizing the order of obtaining <strong>16 Mask Shards</strong>, the number of possible unique permutations is given by:',
    totalItems: 16,
    unrestrictedPermutations: '16! = 20,922,789,888,000',
    restrictions: [
      {
        description:
          '<strong>Sly Mask Shard 1</strong>, <strong>Sly Mask Shard 2</strong>, <strong>Sly Mask Shard 3</strong>, and <strong>Sly Mask Shard 4</strong> must be obtained in the exact order <strong>Sly Mask Shard 1 → Sly Mask Shard 2 → Sly Mask Shard 3 → Sly Mask Shard 4</strong>.',
        factor: 24,
        explanation: 'This reduces valid permutations by a factor of 4! = 24.',
      },
    ],
    finalPermutations: '16! / 4! = 871,782,912,000',
  },
  allmasksallvessels: {
    title: 'Combinatorial Complexity of All Masks All Vessels',
    description:
      'When randomizing the order of obtaining <strong>All Masks All Vessels</strong>, the number of possible unique permutations is given by:',
    totalItems: 25,
    unrestrictedPermutations: '25! ≈ 1.55 × 10<sup>25</sup>',
    restrictions: [
      {
        description:
          '<strong>Sly Vessel Fragment 1</strong> and <strong>Sly Vessel Fragment 2</strong> must be obtained in the exact order <strong>Sly Vessel Fragment 1 → Sly Vessel Fragment 2</strong>.',
        factor: 2,
        explanation: 'Reduces permutations by a factor of 2.',
      },
      {
        description:
          '<strong>Sly Mask Shard 1</strong>, <strong>Sly Mask Shard 2</strong>, <strong>Sly Mask Shard 3</strong>, and <strong>Sly Mask Shard 4</strong> must be obtained in the exact order <strong>Sly Mask Shard 1 → Sly Mask Shard 2 → Sly Mask Shard 3 → Sly Mask Shard 4</strong>.',
        factor: 24,
        explanation: 'Reduces permutations by a factor of 4! = 24.',
      },
      {
        description:
          '<strong>Seer Vessel Fragment</strong> and <strong>Seer Mask Shard</strong> must be obtained in the exact order <strong>Seer Vessel Fragment 1 → Seer Mask Shard</strong>.',
        factor: 2,
        explanation: 'Reduces permutations by a factor of 2.',
      },
    ],
    finalPermutations: '25! / (2 × 2 × 4!) ≈ 1.61 × 10<sup>23</sup>',
  },
  allcharmnotches: {
    title: 'Combinatorial Complexity of All Charm Notches',
    description:
      'When randomizing the order of obtaining <strong>All Charm Notches</strong>, the number of possible unique permutations is given by:',
    totalItems: 10,
    unrestrictedPermutations: '10! = 3,628,800',
    restrictions: [
      {
        description:
          '<strong>Salubra Notch 1</strong>, <strong>Salubra Notch 2</strong>, <strong>Salubra Notch 3</strong>, and <strong>Salubra Notch 4</strong> must be obtained in the exact order <strong>Salubra Notch 1 → Salubra Notch 2 → Salubra Notch 3 → Salubra Notch 4</strong>.',
        factor: 24,
        explanation: 'Reduces permutations by a factor of 4! = 24.',
      },
      {
        description:
          '<strong>Grimmchild</strong>, <strong>Grimmchild Lvl 2</strong>, and <strong>Grimm Notch</strong> must be obtained in the exact order <strong>Grimmchild → Grimmchild Lvl 2 → Grimm Notch</strong>.',
        factor: 6,
        explanation: 'Reduces permutations by a factor of 3! = 6.',
      },
    ],
    finalPermutations: '10! / (4! × 3!) = 25,200',
  },
  allwhisperingroots: {
    title: 'Combinatorial Complexity of All Whispering Roots',
    description:
      'When randomizing the order of obtain <strong>All Whispering Roots</strong>, the number of possible unique permutations is given by:',
    totalItems: 15,
    unrestrictedPermutations: '15! = 15 × 14 × 13 × … × 2 × 1',
    finalPermutations: '15! = 1,307,674,368,000',
  },
  lordofthekeys: {
    title: 'Combinatorial Complexity of Lord Of The Keys',
    description:
      'When randomizing the order of <strong>Lord Of The Keys</strong>, the number of possible unique permutations in which we can obtain keys is given by:',
    totalItems: 7,
    unrestrictedPermutations: '7! = 5,040',
    restrictions: [
      {
        description:
          '<strong>Shopkeeper&apos;s Key</strong> must be obtained before <strong>Elegant Key</strong>.',
        factor: 2,
        explanation: 'This reduces valid permutations by half.',
      },
    ],
    finalPermutations: '7! / 2 = 2,520',
  },
  allgreatknights: {
    title: 'Combinatorial Complexity of All Great Knights',
    description:
      'When randomizing the order of <strong>All Great Knights</strong>, the number of possible unique permutations in which we can complete the questlines for all five knights is given by:',
    totalItems: 5,
    unrestrictedPermutations: '5! = 5 × 4 × 3 × 2 × 1',
    finalPermutations: '5! = 120',
  },
}

export default COMBINATORIAL_DATA
