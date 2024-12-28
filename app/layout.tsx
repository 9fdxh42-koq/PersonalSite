import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mathias Clari Drenik | Full-Stack Developer",
  description: "Full-Stack Developer based in Slovenia, working globally on interactive web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono">
        {children}
      </body>
    </html>
  );
}
