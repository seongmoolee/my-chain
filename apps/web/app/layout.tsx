"use client";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import AsyncLayoutDynamic from "@/containers/async-layout-dynamic";

import Footer from "@/components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "h-full bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AsyncLayoutDynamic>{children}</AsyncLayoutDynamic>
        <Footer></Footer>
      </body>
    </html>
  );
}
