import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Wedding Of Shendy & Oky",
  description: `Hello you are invited to the wedding of Shendy & Oky. Open to see the invitation.`,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "shendyoky.me/imageog.jpg",
        width: 600,
        height: 600,
        alt: "Shendy & Oky",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
