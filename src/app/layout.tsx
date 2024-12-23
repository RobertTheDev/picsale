import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import company from './lib/company';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${company.name}`,
    default: `${company.name} | Buy and sell quality stock photos and images`,
  },
  description:
    'Picsale is an online marketplace allowing users to buy and sell photos and images. This is a portfolio project from Robert Hawker. This is not a commercial website.',
};

export default function RootLayout({
  auth,
  basket,
  children,
  photos,
}: Readonly<{
  auth: React.ReactNode;
  basket: React.ReactNode;
  children: React.ReactNode;
  photos: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-black ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen min-w-full flex-col bg-black text-white dark:bg-black">
          <Header />
          <ProgressBar />
          <div>{auth}</div>
          <div>{basket}</div>
          <div>{photos}</div>
          <div className="flex min-w-full flex-1 flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
