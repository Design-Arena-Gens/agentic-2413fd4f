import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Football Hub',
    template: '%s | Football Hub'
  },
  description: 'Scores, fixtures, teams, and news — all in one place.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
