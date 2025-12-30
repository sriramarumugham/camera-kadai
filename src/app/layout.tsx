import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Camera Kadai - Launching Soon",
  description: "Your one-stop camera rental destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodoni.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
