import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const nunito_sans = Nunito_Sans({ subsets: ["latin"], display: 'swap', adjustFontFallback: false });

export const metadata: Metadata = {
  title: "Kyan Cox",
  description: "Kyan Cox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className="!scroll-smooth"
      suppressHydrationWarning
    >
      <body className={nunito_sans.className} >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
