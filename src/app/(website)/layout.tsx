import MobileNavigationOverlay from "@apee/components/MobileNavigationOverlay";
import Navigation from "@apee/components/Navigation";
import NavigationToggle from "@apee/components/NavigationToggle";
import { Flex } from "@apee/components/ui";
import { inter } from "@apee/lib/fonts";
import { keystatic } from "@apee/lib/keystatic";
import { cn } from "@apee/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antoine Plu",
  description: "Senior designer passionate about sports and gaming",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await keystatic.collections.collections.all();
  const collectionsForNavigation = collections.map(({ slug, entry }) => ({
    slug,
    name: entry.name,
  }));

  return (
    <html lang="en">
      <body className={cn("dark relative min-h-screen", inter.className)}>
        <div className="absolute left-4 top-8 z-50 translate-x-4 transition-transform duration-200 ease-out md:nav-open:translate-x-0">
          <NavigationToggle />
        </div>
        <Flex className="navigation-large absolute inset-0 hidden min-h-screen md:flex">
          <Flex className="flex-[0_1_256px] pt-16 opacity-0 transition-opacity duration-200 ease-out nav-open:opacity-100">
            <Navigation collections={collectionsForNavigation} />
          </Flex>
        </Flex>
        <Flex className="navigation-mobile absolute inset-0 z-50 hidden min-h-screen nav-open:flex md:hidden nav-open:md:hidden">
          <MobileNavigationOverlay />
          <Flex className="absolute inset-x-0 top-1/2 h-[50%] overflow-hidden rounded-t-2xl bg-gray-2">
            <div className="w-full overflow-auto">
              <Navigation collections={collectionsForNavigation} />
            </div>
          </Flex>
        </Flex>
        <Flex className="content-surface pointer-events-none absolute inset-0 max-h-screen overflow-hidden p-2 md:p-4">
          <Flex className="pointer-events-none min-h-full flex-[0_1_0px] transition-flex duration-200 ease-out will-change-auto md:nav-open:flex-[0_0_256px]" />
          <Flex className="pointer-events-auto relative overflow-hidden rounded-3xl bg-gray-surface">
            <div className="to-gray-surface/50 absolute inset-x-0 top-0 z-40 h-12 w-full bg-gradient-to-b from-gray-surface" />
            <div className="to-gray-surface/50 absolute inset-x-0 bottom-0 z-40 h-12 w-full bg-gradient-to-t from-gray-surface" />
            {children}
          </Flex>
        </Flex>
      </body>
    </html>
  );
}
