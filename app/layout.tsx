import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mukund Ajmera — Software, AI, and automation",
    template: "%s | Mukund Ajmera",
  },
  description:
    "A portfolio of Mukund Ajmera's work across AI systems, document intelligence, and browser automation.",
  openGraph: {
    title: "Mukund Ajmera — Software, AI, and automation",
    description:
      "Selected projects exploring voice tools, document intelligence, and browser automation.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#eef2f7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
