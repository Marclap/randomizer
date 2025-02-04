import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HK Random Split Order',
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header />
              <div className="min-h-[calc(100vh-6.5rem)] flex flex-1 flex-col gap-4 p-7">
                <div className="flex-1 rounded-xl bg-muted/50 md:min-h-min">
                  {children}
                </div>
                <div className="flex-1 rounded-xl bg-muted/50 max-h-[5%]">
                  <div className="flex flex-wrap items-center justify-center max-w-[95%] h-full m-auto py-1">
                    <p>
                      Built by{' '}
                      <a
                        href="https://github.com/Marclap"
                        target="_blank"
                        className="underline underline-offset-4"
                      >
                        Marclap
                      </a>
                      . The source code is available on{' '}
                      <a
                        href="https://github.com/Marclap/randomizer"
                        target="_blank"
                        className="underline underline-offset-4"
                      >
                        Github
                      </a>
                      .
                    </p>
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
