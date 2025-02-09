'use client'

const CombinatorialInfo = ({ run }: { run: string }) => {
  const RUN_DATA: { [key: string]: React.ReactElement } = {
    elegy: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of Elegy%
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of{' '}
            <span className="font-black">Elegy%</span>, the number of possible
            unique permutations in which we can rescue the grubs is given by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              44! = 44 x 43 x 42 x ... x 2 x 1
            </code>
          </div>
          <div className="text-lg">
            <p>
              Note: <span className="font-black">City Collector All Grubs</span>{' '}
              counts as 3 grubs in terms of points, it is treated as a single
              event in the permutation sequence. Therefore, the total number of
              points is still 44.
            </p>
          </div>
          <p className="text-lg">
            This factorial operation results in approximately:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              44! = ~2.66 x 10<sup className="text-base">54</sup>
            </code>
          </div>
        </div>
      </>
    ),
    worldsoul: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of Worldsoul
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of{' '}
            <span className="font-black">Worldsoul</span>, the number of
            possible unique permutations in which we can obtain fragments is
            given by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              9! = 9 x 8 x 7 x ... x 2 x 1
            </code>
          </div>
          <p>
            However, there is one restriction:{' '}
            <span className="font-black">Sly Vessel Fragment 1</span> must be
            obtained before{' '}
            <span className="font-black">Sly Vessel Fragment 2</span>. This
            condition reduces the total number of valid permutations.
          </p>
          <p className="text-lg">
            Without restrictions, the total number of permutations would be:
          </p>
          <div className="flex items-center justify-center space-x-2 bg-secondary p-4 rounded-md shadow-sm">
            <code className="text-2xl font-mono font-black">9! = 362,880</code>
          </div>
          <p className="text-lg">
            With the restriction, only half of these permutations are valid,
            therefore, the total number of valid permutations is:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              9! / 2 = 181,440
            </code>
          </div>
        </div>
      </>
    ),
    allstagstations: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of All Stag Stations
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of obtain{' '}
            <span className="font-black">All Stag Stations</span>, the number of
            possible unique permutations is given by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              9! = 9 x 8 x 7 x ... x 2 x 1
            </code>
          </div>
          <p className="text-lg">
            The total number of possible permutations is:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">9! = 362,880</code>
          </div>
        </div>
      </>
    ),
    allmaskshards: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of 16 Mask Shards
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of obtaining{' '}
            <span className="font-black">16 Mask Shards</span>, the number of
            possible unique permutations is given by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              16! = 16 x 15 x 14 x ... x 2 x 1
            </code>
          </div>
          <p className="text-lg">
            <span className="font-black">Sly Mask Shard 1</span>,{' '}
            <span className="font-black">Sly Mask Shard 2</span>,{' '}
            <span className="font-black">Sly Mask Shard 3</span> and{' '}
            <span className="font-black">Sly Mask Shard 4</span> have specific
            restrictions. They must be obtained in the exact order{' '}
            <span className="font-black">
              Sly Mask Shard 1 → Sly Mask Shard 2 → Sly Mask Shard 3 → Sly Mask
              Shard 4
            </span>
            . This restriction reduces the total number of valid permutations.
          </p>
          <p className="text-lg">
            Without restrictions, the total number of permutations would be:
          </p>
          <div className="flex items-center justify-center space-x-2 bg-secondary p-4 rounded-md shadow-sm">
            <code className="text-2xl font-mono font-black">
              16! = 20,922,789,888,000
            </code>
          </div>
          <p className="text-lg">
            However, due to the restrictions on the order of the Sly Mask
            Shards, only{' '}
            <span className="font-black">1 out of every 24 permutations</span>{' '}
            is valid, which reduces the total number of permutations by a factor
            of <span className="font-black">4! = 24</span>.
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              16! / 4! = 871,782,912,000
            </code>
          </div>
        </div>
      </>
    ),
    allmasksallvessels: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of All Masks All Vessels
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of obtaining{' '}
            <span className="font-black">All Masks All Vessels</span>, the
            number of possible unique permutations is given by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              25! = 25 x 24 x 23 x ... x 2 x 1
            </code>
          </div>
          <div className="text-lg">
            However, there are some restrictions:{' '}
            <ul className="list-disc list-inside">
              <li>
                <span className="font-black">Sly Vessel Fragment 1</span> and{' '}
                <span className="font-black">Sly Vessel Fragment 2</span> must
                be obtained in the exact order{' '}
                <span className="font-black">
                  Sly Vessel Fragment 1 → Sly Vessel Fragment 2
                </span>
                .
              </li>
              <li>
                <span className="font-black">Sly Mask Shard 1</span>,{' '}
                <span className="font-black">Sly Mask Shard 2</span>,{' '}
                <span className="font-black">Sly Mask Shard 3</span> and{' '}
                <span className="font-black">Sly Mask Shard 4</span> must be
                obtained in the exact order{' '}
                <span className="font-black">
                  Sly Mask Shard 1 → Sly Mask Shard 2 → Sly Mask Shard 3 → Sly
                  Mask Shard 4
                </span>
                .
              </li>
            </ul>
            These restrictions reduce the total number of valid permutations.
          </div>
          <p className="text-lg">
            Without restrictions, the total number of permutations would be:
          </p>
          <div className="flex items-center justify-center space-x-2 bg-secondary p-4 rounded-md shadow-sm">
            <code className="text-2xl font-mono font-black">
              25! = ~1.55 x 10
              <sup className="text-sm">25</sup>
            </code>
          </div>
          <div className="text-lg">
            <p>
              However, due to the restrictions on the order of the Sly Vessel
              Fragments and Sly Mask Shards, only{' '}
              <span className="font-black">1 out of every 48 permutations</span>{' '}
              is valid. This is because:
            </p>
            <ul className="list-disc list-inside">
              <li>
                The 2 restricted Vessel Fragments can only be obtained in one
                specific order, which reduces the total by a factor of{' '}
                <span className="font-black">2</span>.
              </li>
              <li>
                The 4 restricted Mask Shards can only be obtained in one
                specific order, reducing the total by a factor of{' '}
                <span className="font-black">4! = 24</span>.
              </li>
            </ul>
            <p>
              Therefore, the total number of permutations is reduced by a
              combined factor of <span className="font-black">2 x 4! = 48</span>
              .
            </p>
          </div>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              25! / (2 x 4!) = ~3.23 x 10<sup className="text-sm">23</sup>
            </code>
          </div>
        </div>
      </>
    ),
    allcharmnotches: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of All Charm Notches
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of obtaining{' '}
            <span className="font-black">All Charm Notches</span>, the number of
            possible unique permutations is given by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              10! = 10 x 9 x 8 x ... x 2 x 1
            </code>
          </div>
          <div className="text-lg">
            However, there are some restrictions:{' '}
            <ul className="list-disc list-inside">
              <li>
                <span className="font-black">Salubra Notch 1</span>,{' '}
                <span className="font-black">Salubra Notch 2</span>,{' '}
                <span className="font-black">Salubra Notch 3</span> and{' '}
                <span className="font-black">Salubra Notch 4</span> must be
                obtained in the exact order{' '}
                <span className="font-black">
                  Salubra Notch 1 → Salubra Notch 2 → Salubra Notch 3 → Salubra
                  Notch 4
                </span>
                . Although this is not necessary, it will make charm collecting
                more convenient.
              </li>
              <li>
                <span className="font-black">Grimmchild</span>,{' '}
                <span className="font-black">Grimmchild Lvl 2</span> and{' '}
                <span className="font-black">Grimm Notch</span> must be obtained
                in the exact order{' '}
                <span className="font-black">
                  Grimmchild → Grimmchild Lvl 2 → Grimm Notch
                </span>
                . <span className="font-black">Grimmchild</span> is added to
                make the race more interesting.
              </li>
            </ul>
          </div>
          <p className="text-lg">
            Without restrictions, the total number of permutations would be:
          </p>
          <div className="flex items-center justify-center space-x-2 bg-secondary p-4 rounded-md shadow-sm">
            <code className="text-2xl font-mono font-black">
              10! = 3,628,800
            </code>
          </div>
          <div className="text-lg">
            <p>
              However, due to the restrictions on the order of the Notch Salubra
              and Grimmchild elements, only{' '}
              <span className="font-black">
                1 out of every 576 permutations
              </span>{' '}
              is valid. This is because:
            </p>
            <ul className="list-disc list-inside">
              <li>
                The 4 restricted Notch Salubra elements can only be obtained in
                one specific order, which reduces the total by a factor of{' '}
                <span className="font-black">4! = 24</span>.
              </li>
              <li>
                The 3 restricted Grimm elements can only be obtained in one
                specific order, reducing the total by a factor of{' '}
                <span className="font-black">3! = 6</span>.
              </li>
            </ul>
            <p>
              Therefore, the total number of permutations is reduced by a
              combined factor of{' '}
              <span className="font-black">4! x 3! = 24 x 6 = 576</span>.
            </p>
          </div>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              10! / (4! x 3!) = 25,200
            </code>
          </div>
        </div>
      </>
    ),
    allwhisperingroots: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of All Whispering Roots
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of obtain{' '}
            <span className="font-black">All Whispering Roots</span>, the number
            of possible unique permutations is given by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              15! = 15 x 14 x 13 x ... x 2 x 1
            </code>
          </div>
          <p className="text-lg">
            The total number of possible permutations is:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              15! = 1,307,674,368,000
            </code>
          </div>
        </div>
      </>
    ),
    lordofthekeys: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of Lord Of The Keys
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of{' '}
            <span className="font-black">Lord Of The Keys</span>, the number of
            possible unique permutations in which we can obtain keys is given
            by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              7! = 7 x 6 x 5 x ... x 2 x 1
            </code>
          </div>
          <p>
            However, there is one restriction:{' '}
            <span className="font-black">Shopkeeper&apos;s Key</span> must be
            obtained before <span className="font-black">Elegant Key</span>.
            This condition reduces the total number of valid permutations.
          </p>
          <p className="text-lg">
            Without restrictions, the total number of permutations would be:
          </p>
          <div className="flex items-center justify-center space-x-2 bg-secondary p-4 rounded-md shadow-sm">
            <code className="text-2xl font-mono font-black">7! = 5,040</code>
          </div>
          <p className="text-lg">
            With the restriction, only half of these permutations are valid,
            therefore, the total number of valid permutations is:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              7! / 2 = 2,520
            </code>
          </div>
        </div>
      </>
    ),
    allgreatknights: (
      <>
        <h3 className="text-2xl font-bold text-center mb-7">
          Combinatorial Complexity of All Great Knights
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            When randomizing the order of{' '}
            <span className="font-black">All Great Knights</span>, the number of
            possible unique permutations in which we can complete the questlines
            of for all five knights is given by:
          </p>
          <div className="flex items-center justify-center bg-secondary p-4 rounded-md">
            <code className="text-2xl font-mono font-black">
              5! = 5 x 4 x 3 x 2 x 1
            </code>
          </div>
          <p className="text-lg">
            The total number of possible permutations is:
          </p>
          <div className="flex items-center justify-center space-x-2 bg-secondary p-4 rounded-md shadow-sm">
            <code className="text-2xl font-mono font-black">5! = 120</code>
          </div>
        </div>
      </>
    ),
  }

  const data = RUN_DATA[run]

  if (!data) {
    return (
      <div className="text-muted-foreground text-center text-red-600 py-8">
        Invalid run type.
      </div>
    )
  }

  return <div className="p-11 text-lg font-semibold">{data}</div>
}

export default CombinatorialInfo
