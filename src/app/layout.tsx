import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HK Random Split Order',
  description:
    'This page generates random orders for some categories of Hollow Knight speedrun, this is just for the purpose of changing the routine and making fun runs.',
  verification: {
    google: 'a6Xk-h5IWUOg5tL6iPSbrbixFh-9QnXG6A0Wt_iyWXY',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
              <div className="min-h-[calc(100vh-10.5rem)] flex flex-1 flex-col gap-4 p-7 font-sans">
                <div className="flex-1 rounded-xl bg-muted/50 md:min-h-min">
                  {children}
                </div>
                <div className="flex-1 rounded-xl bg-muted/50 max-h-[4rem] min-h-[4rem]">
                  <div className="flex flex-wrap items-center justify-center max-w-[95%] h-full m-auto py-1">
                    <p>
                      Built by{' '}
                      <a
                        href="https://www.twitch.tv/marclap99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        Marclap
                      </a>
                      . The source code is available on{' '}
                      <a
                        href="https://github.com/Marclap/randomizer"
                        target="_blank"
                        rel="noopener noreferrer"
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
