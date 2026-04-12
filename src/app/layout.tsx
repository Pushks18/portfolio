import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { SpaceCanvas } from "@/components/three/SpaceCanvas";
import { Navbar } from "@/components/layout/Navbar";
import { TelemetryBar } from "@/components/layout/TelemetryBar";
import { TarsWidget } from "@/components/tars/TarsWidget";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pushkaraj Baradkar — Software Engineer & AI Researcher",
  description:
    "Portfolio of Pushkaraj Baradkar — software engineer and AI researcher at USC specializing in computer vision, real-time ML systems, and full-stack development.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-space-deep text-text-light font-body antialiased">
        <SpaceCanvas />
        <Navbar />
        <main className="relative z-10 pt-12 pb-12">{children}</main>
        <TarsWidget />
        <TelemetryBar />
        <Analytics />
      </body>
    </html>
  );
}
