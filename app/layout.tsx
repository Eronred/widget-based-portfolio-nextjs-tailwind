import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Erencan Arica - Design Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body className="flex items-center justify-center bg-white text-black p-2">
        <div
          className="max-w-[1400px] flex items-center justify-center overflow-hidden "
        >
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
