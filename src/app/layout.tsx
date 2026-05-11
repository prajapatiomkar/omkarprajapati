import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omkar Prajapati",
  description: "Portfolio Website / Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
