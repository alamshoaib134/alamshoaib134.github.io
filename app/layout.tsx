import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shoaib Alam | Software Engineer",
  description:
    "Software Engineer at Nike specializing in AI/ML, full-stack development, and building innovative solutions. Based in Bangalore, India.",
  keywords: [
    "Shoaib Alam",
    "Software Engineer",
    "Nike",
    "AI",
    "Machine Learning",
    "Full Stack Developer",
    "Python",
    "TypeScript",
    "Bangalore",
  ],
  authors: [{ name: "Shoaib Alam" }],
  openGraph: {
    title: "Shoaib Alam | Software Engineer",
    description:
      "Software Engineer at Nike specializing in AI/ML and full-stack development.",
    url: "https://alamshoaib134.github.io",
    siteName: "Shoaib Alam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Alam | Software Engineer",
    description:
      "Software Engineer at Nike specializing in AI/ML and full-stack development.",
    creator: "@alamshoaib134",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
