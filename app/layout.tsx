import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyMobileBar from '../components/StickyMobileBar'
import Script from 'next/script'

export const metadata = {
  title: 'FastWheel Limo',
  description: 'Premium limo & chauffeur service',
  manifest: '/manifest.json',
  themeColor: '#FFD700',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FastWheel Limo" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
      </head>

      <body className="min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-1">{children}</main>
        <StickyMobileBar />
        <Footer />

        {/* ✅ 3CX Web Component */}
        <call-us-selector
          phonesystem-url="https://fastwheels.ma.3cx.us"
          party="LiveChat457078"
        ></call-us-selector>

        {/* ✅ Load 3CX external script */}
        <Script
          id="3cx-script"
          src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
          strategy="afterInteractive"
        />

        {/* ✅ Initialize 3CX AFTER script loads */}
        <Script id="3cx-init" strategy="afterInteractive">
          {`
            const init3cx = () => {
              if (window.CallUs && document.querySelector('call-us-selector')) {
                console.log("✅ Initializing 3CX widget...");
                window.CallUs.init();
              } else {
                console.warn("⏳ 3CX not ready, retrying...");
                setTimeout(init3cx, 300);
              }
            };
            init3cx();
          `}
        </Script>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
