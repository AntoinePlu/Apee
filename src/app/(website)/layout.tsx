import Navigation from "@apee/components/Navigation";
import { inter } from "@apee/lib/fonts";
import { cn } from "@apee/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antoine Plu",
  description: "Senior designer passionate about sports and gaming",
};

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body className={cn("dark relative flex min-h-screen", inter.className)}>
        <Navigation />
        <main className="bg-gray-surface rounded-3xl flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
