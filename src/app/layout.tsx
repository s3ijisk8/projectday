import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daycraft',
  description: 'Find, create, and share things to do',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container py-8">
          {children}
        </main>
      </body>
    </html>
  );
}


