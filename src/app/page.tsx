import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { SIDEBAR } from './constants'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-3 min-w-[90%]">
      <h2 className="text-3xl text-center font-semibold w-full">
        Random split order generator for Hollow Knight speedruns
      </h2>
      <Separator className="bg-white" />
      <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
        {SIDEBAR.map((item) => (
          <Link key={item.title} href={item.url}>
            <Card className="flex flex-col items-center justify-center w-96 p-4 text-center hover:bg-secondary hover:border-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold uppercase">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <item.icon className="w-24 h-24" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
