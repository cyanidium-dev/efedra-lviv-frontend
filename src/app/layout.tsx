import "./globals.css";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/shared/header/Header";
import dynamic from "next/dynamic";
import SplashGate from "@/components/shared/splashScreen/SplashGate";

const Footer = dynamic(() => import("@/components/shared/footer/Footer"), {
  ssr: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const evolenta = localFont({
  src: "../fonts/evolenta-regular.ttf",
  variable: "--font-evolenta",
  display: "swap",
});

export async function generateMetadata() {
  return getDefaultMetadata();
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${montserrat.variable} ${evolenta.variable} flex min-h-dvh flex-col antialiased text-[14px] font-normal leading-[120%]`}
      >
        <SplashGate>
          <Header />
          <main className="flex-1 pt-[86px] lg:pt-[99px]">{children}</main>
          <Footer />
        </SplashGate>
      </body>
    </html>
  );
}
