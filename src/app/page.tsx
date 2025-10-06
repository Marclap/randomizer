import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { LOGOS } from '@/constants/paths'
import { SIDEBAR } from '@/constants/sidebar'
import Image from 'next/image'
import Link from 'next/link'

const tripleDropShadow =
  'drop-shadow(0 0 2px #000) drop-shadow(0 2px 0 #000) drop-shadow(2px 0 0 #000)'

export default function Home() {
  const itemsWithIcons = SIDEBAR.filter((item) => item.title !== 'Home')

  return (
    <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto p-4">
      <div className="w-full text-center">
        <div className="flex justify-center mb-6">
          <Image
            width={1000}
            height={1000}
            src={LOGOS.home}
            style={{ filter: tripleDropShadow }}
            alt="Hollow Knight Random Split Order Logo"
            priority
          />
        </div>
        <h2 className="text-3xl font-semibold mb-4">
          Random split order generator for Hollow Knight speedruns
        </h2>
        <Separator className="bg-primary mb-8" />
        <div className="flex flex-wrap justify-center gap-6">
          {itemsWithIcons.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="group block transition-transform hover:scale-105"
              aria-label={`Navigate to ${item.title}`}
            >
              <Card className="w-48 h-48 flex flex-col items-center justify-center p-4 transition-colors group-hover:border-primary group-hover:bg-accent/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-sm font-semibold uppercase tracking-wide">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center">
                  <Avatar className="w-24 h-24 rounded-none">
                    {item.icon ? (
                      <AvatarImage
                        src={item.icon}
                        alt={item.title}
                        className="object-contain p-2"
                        style={{ filter: tripleDropShadow }}
                      />
                    ) : null}
                    <AvatarFallback className="text-xs font-bold bg-muted">
                      {item.title
                        .split(' ')
                        .map((word) => word[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
