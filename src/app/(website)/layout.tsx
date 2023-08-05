import { FullWidthToggle } from "@apee/components/FullWidthToggle";
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
        <div className="absolute inset-0 flex min-h-screen [.full-width_&]:z-0">
          <Navigation />
        </div>
        <div className="flex w-full min-h-screen [.full-width_&]:z-10">
          <div className="w-64 h-full pointer-events-none [.full-width_&]:w-0" />
          <main className="bg-gray-surface rounded-3xl flex-1 flex flex-col m-4 ml-0 [.full-width_&]:ml-4">
            <div className="hidden [.full-width_&]:block">
              <FullWidthToggle />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
