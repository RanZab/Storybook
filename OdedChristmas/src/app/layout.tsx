import type { Metadata } from "next";
import { Inter, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-cursive",
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-elegant",
});

export const metadata: Metadata = {
  title: "A Wintry Piano Wonderland - Christmas Carols Reimagined by Oded Essner",
  description: "Beautiful reimagined Christmas carols arranged for piano by Oded Essner. Features lovely illustrations and nostalgic, family-friendly arrangements of beloved holiday classics.",
  keywords: "Christmas carols, piano arrangements, Oded Essner, sheet music, holiday music, Christmas music book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancingScript.variable} ${playfairDisplay.variable} font-sans antialiased bg-gradient-to-br from-pastel-green via-pastel-purple to-pastel-pink min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 