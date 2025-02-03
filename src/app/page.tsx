import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { SIDEBAR } from '@/constants'
import Link from 'next/link'

export default function Home() {
  const itemsWithIcons = SIDEBAR.filter((item) => typeof item.icon === 'string')
  return (
    <div className="pt-3 min-w-[90%] mx-auto">
      <h2 className="text-3xl text-center font-semibold mb-4">
        Random split order generator for Hollow Knight speedruns
      </h2>
      <Separator className="bg-white mb-6" />
      <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
        {itemsWithIcons.map((item) => (
          <>
            <Link
              key={item.title}
              href={item.url}
              className="group block transition-transform hover:scale-105"
              aria-label={`Navigate to ${item.title}`}
            >
              <Card className="h-full flex flex-col items-center justify-center p-6 transition-colors duration-300 group-hover:border-primary">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold uppercase tracking-wide">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage
                      src={item.icon as string}
                      alt={item.title}
                      width={128}
                      height={128}
                      className="object-contain p-2"
                    />
                    <AvatarFallback className="text-2xl bg-muted">
                      {item.title}
                    </AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}
