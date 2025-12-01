import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyMobileBar from '../components/StickyMobileBar'
import Script from 'next/script'

export const metadata = {
  title: 'Shama Passenger Transport & Tours',
  description: 'Reliable passenger transport, airport transfers, corporate travel, and luxury fleet services in UAE.',
  manifest: '/manifest.json',
  themeColor: '#FEDF23',
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

        {/* ✅ WhatsApp Floating Chat Widget */}
        <Script id="whatsapp-widget" strategy="afterInteractive">
        {`
          (function () {
            var options = {
              whatsapp: "+971558840121",
              call_to_action: "Chat with us on WhatsApp",
              position: "right",
            };
            var proto = document.location.protocol,
              host = "getbutton.io",
              url = proto + "//static." + host;
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = url + "/widget-send-button/js/init.js";
            s.onload = function () {
              WhWidgetSendButton.init(host, proto, options);
            };
            var x = document.getElementsByTagName("script")[0];
            x.parentNode.insertBefore(s, x);
          })();
        `}
        </Script>

        {/* Analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
