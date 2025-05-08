import "./globals.css";
import { Montserrat, Inter, Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Voltline | Premium Electrical Wire Solutions",
  description:
    "Nigeria's leading retailer of high-quality electrical wires and cables for industrial and residential applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${robotoMono.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
