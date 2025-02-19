'use client'

import * as React from 'react'

import { NavMain } from '@/components/nav-main'
import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar'
import { SIDEBAR } from '@/constants/sidebar'

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
