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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("dark relative flex min-h-screen", inter.className)}>
        <div className="flex min-h-screen w-64 transition-opacity [.full-width_&]:opacity-50">
          <Navigation />
        </div>
        <div className="pointer-events-none absolute inset-0 flex min-h-screen">
          <div className="min-h-full min-w-[16px] flex-[0_0_256px] transition-flex duration-200 ease-out [.full-width_&]:flex-[0_1_16px]" />
          <main className="pointer-events-auto relative m-4 ml-0 flex flex-auto flex-col rounded-3xl bg-gray-surface">
            <div className="absolute left-4 top-4 opacity-0 transition-opacity delay-300 [.full-width_&]:opacity-100">
              <FullWidthToggle />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
