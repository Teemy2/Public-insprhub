import './globals.css';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'inspr - Your Gateway to Global Remote Opportunities',
  description: 'Empowering tertiary students across Africa with access to flexible remote jobs that fit your schedule, and build your career.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
