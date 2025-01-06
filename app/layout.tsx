import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ['400', '600'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Website Portfolio",
  description: "Max's website portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={kanit.className}
      >
        {children}
      </body>
    </html>
  );
}
