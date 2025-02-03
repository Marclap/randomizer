import { AppSidebar } from '@/components/app-sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Random split order generator for Hollow Knight speedruns',
  description:
    'This page generates random orders for some Hollow Knight speedrun categories, this is just for the purpose of changing the routine and making fun runs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <div className="min-h-full flex flex-1 flex-col gap-4 p-7">
                <div className=" flex-1 rounded-xl bg-muted/50 md:min-h-min">
                  <div className="flex flex-wrap items-center justify-center max-w-[95%] h-full m-auto py-1">
                    {children}
                  </div>
                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
