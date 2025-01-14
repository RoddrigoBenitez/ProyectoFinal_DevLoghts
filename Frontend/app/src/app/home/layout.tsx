import type { Metadata } from "next";
//import localFont from "next/font/local";
//import "../../globals.css";

import { CartProvider } from "@/context/CartContext";



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Home",
  description: "first component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className='flex flex-col justify-between min-h-screen items-center w-full'
      >

        {children}

      </body>
    </html>
  );
}
