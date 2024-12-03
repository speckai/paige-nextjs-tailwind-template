import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paige Template",
  description: "A simple website template built with Next.js and Paige",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
