'use client'

import * as React from 'react'

import { SIDEBAR } from '@/app/constants'
import { NavMain } from '@/components/nav-main'
import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarContent className="m-1 pt-3">
        <NavMain items={SIDEBAR} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
