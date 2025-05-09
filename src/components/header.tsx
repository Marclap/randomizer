'use client'

import { ModeToggle } from '@/components/mode-toggle'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { TITLES } from '@/constants/titles'
import { usePathname } from 'next/navigation'

const Header = () => {
  const params = usePathname()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between w-full gap-2 px-3">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {params && (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block uppercase font-black">
                  {TITLES[params.split('/').slice(-1).toString()]}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
