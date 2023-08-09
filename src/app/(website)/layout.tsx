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
        <div className="flex min-h-screen w-64 [.full-width_&]:opacity-50 transition-opacity">
          <Navigation />
        </div>
        <div className="absolute inset-0 flex min-h-screen pointer-events-none">
          <div className="flex-[0_0_256px] h-full [.full-width_&]:flex-[0_1_16px] transition-flex ease-out duration-200 overflow-hidden" />
          <main className="relative bg-gray-surface rounded-3xl flex-auto flex flex-col m-4 ml-0 pointer-events-auto overflow-hidden">
            <div className="opacity-0 [.full-width_&]:opacity-100 transition-opacity delay-300 absolute top-4 left-4">
              <FullWidthToggle />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
