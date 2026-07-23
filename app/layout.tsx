import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMP Sales - Build Better Digital",
  description: "SMP Sales, Some of the best freelances with the finest work you will ever find.",
  icons: { icon: "/smp-sales-mark.svg", shortcut: "/smp-sales-mark.svg" },
  openGraph: {
    title: "SMP Sales - Services done right.",
    description: "Number 1 best place to buy ",
  },
  twitter: {
    card: "summary",
    title: "SMP Sales - Build Better Digital",
    description: "SMP Sales, Some of the best freelances with the finest work you will ever find.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
