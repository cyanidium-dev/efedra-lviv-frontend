import './globals.css';
import { getDefaultMetadata } from '@/utils/getDefaultMetadata';
import { Montserrat } from 'next/font/google';
import Header from '@/components/shared/header/Header';
import dynamic from 'next/dynamic';
import SplashGate from '@/components/shared/splashScreen/SplashGate';
import { Manrope } from 'next/font/google';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const Footer = dynamic(() => import('@/components/shared/footer/Footer'), {
  ssr: true,
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export async function generateMetadata() {
  return {
    ...getDefaultMetadata(),
    icons: {
      apple: '/apple-touch-icon.png',
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${montserrat.variable} ${manrope.variable} ${raleway.variable} flex min-h-dvh flex-col antialiased text-[14px] font-normal leading-[120%]`}
      >
        <SplashGate>
          <Header />
          <main className="flex-1 pt-[86px] lg:pt-0">{children}</main>
          <Footer />
        </SplashGate>
      </body>
    </html>
  );
}
