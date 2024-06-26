import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rate Rover",
  description: "Convert all the currencies you want !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <Header/>
          {children}
        </main>
      </body>
      </html>
    </>
  );
}