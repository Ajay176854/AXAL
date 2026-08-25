import type { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://axalpack.in'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-blue-200 flex flex-col antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
