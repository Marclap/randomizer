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

  return (
    <div className="h-auto max-h-[69vh] w-full max-w-2xl rounded-md border bg-background/90 backdrop-blur-sm p-7 space-y-4">
      <h3 className="text-2xl font-bold text-center mb-4">{data.title}</h3>
      <div className="space-y-4">
        <p className="text-lg">{data.description}</p>
        <div className="flex items-center justify-center space-x-2 bg-secondary/60 p-4 rounded-md shadow-sm">
          <code className="text-2xl font-mono text-white">{data.formula}</code>
        </div>
        <div className="text-lg">{data.specialNote}</div>
        {data.additionalInfo && data.additionalInfo}
        <div className="flex items-center justify-center space-x-2 bg-secondary/60 p-4 rounded-md shadow-sm">
          <code className="text-2xl font-mono text-white">{data.result}</code>
        </div>
        <p className="italic mt-4 font-bold">
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
