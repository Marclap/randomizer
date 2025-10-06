'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const getLastSegment = (path: string): string => {
  return path.split('/').filter(Boolean).pop() || ''
}

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: string
  }[]
}) {
  const pathname = usePathname()
  const currentSegment = getLastSegment(pathname)

  return (
    <SidebarMenu>
      {items.map((item) => {
        const itemSegment = getLastSegment(item.url)
        const isActive = currentSegment === itemSegment
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              className={`h-full hover:bg-accent ${
                isActive ? 'bg-secondary-foreground/20' : ''
              }`}
            >
              <Link href={item.url} className="flex items-center gap-3">
                <Avatar className="w-8 h-8 rounded-none">
                  <AvatarImage
                    src={item.icon}
                    alt={item.title}
                    className="object-contain"
                  />
                  <AvatarFallback className="bg-transparent">
                    {item.title.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="uppercase font-extrabold text-xs">
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
