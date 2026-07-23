import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smp-sales-trial.vercel.app"),

  title: "SMP Sales - Build Better Digital",
  description:
    "SMP Sales, some of the best freelancers with the finest work you will ever find.",

  icons: {
    icon: "/smp-sales-mark.svg",
    shortcut: "/smp-sales-mark.svg",
  },

  openGraph: {
    title: "SMP Sales - Services Done Right",
    description:
      "SMP Sales, some of the best freelancers with the finest work you will ever find.",
    url: "/",
    siteName: "SMP Sales",
    type: "website",
    images: [
      {
        url: "/banner.jpg",
        width: 1168,
        height: 630,
        alt: "SMP Sales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SMP Sales - Build Better Digital",
    description:
      "SMP Sales, some of the best freelancers with the finest work you will ever find.",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
