import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://next-positivus-landing-page.vercel.app'),
  title: 'Positivus Landing Page',
  description: 'Made with love by Vladimir',
  keywords: ['Demo app', 'Frontend', 'Static page', 'Figma design', 'Landing Page'],
  authors: [{ name: 'Vladimir Gulev' }],
  openGraph: {
    title: 'Positivus Landing Page',
    description: 'Made with love by Vladimir',
    type: 'website',
    images: [
      {
        url: '/Illustration.png',
        width: '1200',
        height: '630',
        alt: 'Positivus Landing Page',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Positivus Landing Page',
    description: 'Made with love by Vladimir',
    images: ['/Illustration.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
