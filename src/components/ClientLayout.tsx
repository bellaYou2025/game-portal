'use client';

import ThemeProvider from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--background-primary)]">
        <nav className="bg-[var(--background-secondary)] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  🎮 Game Portal
                </Link>
              </div>
              <div className="flex items-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
