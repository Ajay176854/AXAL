import type { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://axalpacking.com'),
  icons: {
    icon: '/logo-v2.png',
    shortcut: '/logo-v2.png',
    apple: '/logo-v2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-blue-200 flex flex-col antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
