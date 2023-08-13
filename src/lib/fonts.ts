import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const trumpGothic = localFont({
  src: "./fonts/TrumpGothicEastBold.woff",
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });
