interface RestrictionListProps {
  restrictions: Restriction[]
}

export function RestrictionList({ restrictions }: RestrictionListProps) {
  return (
    <div className="text-lg space-y-2">
      <p>However, there are some restrictions:</p>
      <ul className="list-disc list-inside space-y-1">
        {restrictions.map((r, i) => (
          <li key={i}>
            <span dangerouslySetInnerHTML={{ __html: r.description }} />{' '}
            <span className="text-muted-foreground">{r.explanation}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
