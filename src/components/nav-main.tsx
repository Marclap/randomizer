'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: string | LucideIcon
  }[]
}) {
  const { id } = useParams()

  return (
    <SidebarMenu>
      {items.map((item) => {
        const IconComponent = item.icon
        const isStringIcon = typeof item.icon === 'string'

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              className={`h-full hover:bg-accent/100 ${
                id === item.title ? 'bg-secondary-foreground/20' : ''
              }`}
            >
              <Link href={item.url} className="flex items-center gap-3">
                {isStringIcon ? (
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={item.icon as string}
                      alt={item.title}
                      className="object-contain"
                    />
                    <AvatarFallback className="bg-transparent">
                      {item.title[0]}
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="w-8 h-8">
                    <IconComponent className="object-contain" />
                  </div>
                )}
                <span className="capitalize font-extrabold text-lg">
                  {item.title}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}
