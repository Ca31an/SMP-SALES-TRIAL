import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMP Sales — Build Better Digital",
  description: "Development, design and server setup for ambitious communities and brands.",
  icons: { icon: "/smp-sales-mark.svg", shortcut: "/smp-sales-mark.svg" },
  openGraph: {
    title: "SMP Sales — Build Better Digital",
    description: "Development, design and server setup for ambitious communities and brands.",
  },
  twitter: {
    card: "summary",
    title: "SMP Sales — Build Better Digital",
    description: "Development, design and server setup for ambitious communities and brands.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
