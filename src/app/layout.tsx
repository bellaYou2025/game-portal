import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import ThemeProvider from "@/components/ThemeProvider";
// import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://Vampire.it.com'),
  title: {
    template: '%s | GamePortal',
    default: 'GamePortal - Play Free Online Games',
  },
  description: 'Discover and play the best free online games. New games added daily with instant play, no downloads required.',
  keywords: ['online games', 'free games', 'browser games', 'HTML5 games', 'web games', 'no download games'],
  authors: [{ name: 'GamePortal Team' }],
  category: 'Gaming',
  openGraph: {
    title: 'GamePortal - Play Free Online Games',
    description: 'Discover and play the best free online games. New games added daily with instant play, no downloads required.',
    url: 'https://Vampire.it.com',
    siteName: 'GamePortal',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GamePortal - Your Ultimate Gaming Destination',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://Vampire.it.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <header className="bg-white dark:bg-gray-800 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                      🎮 Game Portal
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-900 dark:text-white">
                      Home
                    </Link>
                    <Link href="/categories" className="inline-flex items-center px-1 pt-1 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      Categories
                    </Link>
                    <Link href="/popular" className="inline-flex items-center px-1 pt-1 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      Popular
                    </Link> */}
                  </div>
                </div>
                <div className="flex items-center">
                  {/* <ThemeToggle /> */}
                </div>
              </div>
            </nav>
          </header>
          {children}
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 dark:text-gray-400">
                © 2025 Game Portal. All rights reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
