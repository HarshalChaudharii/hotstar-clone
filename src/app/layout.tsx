import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex h-scree bg-[#0F1014] overflow-x-hidden"
        )}
      >
        <header className="relative z-10 w-24 h-full  text-white">
          <Header />
        </header>

        <main className="relative z-0 w-full h-full  ">{children}</main>
      </body>
    </html>
  );
}
