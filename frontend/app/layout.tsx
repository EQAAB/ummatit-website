import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ummat IT House | Learn, Grow & Build Skills",
  description: "Explore practical IT courses and authentic Islamic products. For Quran learning, visit our partner Quran Coaching.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
