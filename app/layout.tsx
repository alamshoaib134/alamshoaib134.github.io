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
  title: "Shoaib Alam | Data Engineer at Nike",
  description:
    "Data Engineer II at Nike specializing in ETL pipelines, AI/ML infrastructure, and data solutions. MTech from IIT Gandhinagar. Based in Bangalore, India.",
  keywords: [
    "Shoaib Alam",
    "Data Engineer",
    "Nike",
    "ETL",
    "Data Pipelines",
    "AI",
    "Machine Learning",
    "Python",
    "IIT Gandhinagar",
    "Bangalore",
  ],
  authors: [{ name: "Shoaib Alam" }],
  openGraph: {
    title: "Shoaib Alam | Data Engineer at Nike",
    description:
      "Data Engineer II at Nike specializing in ETL, AI/ML infrastructure, and data solutions.",
    url: "https://alamshoaib134.github.io",
    siteName: "Shoaib Alam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Alam | Data Engineer at Nike",
    description:
      "Data Engineer II at Nike specializing in ETL, AI/ML infrastructure, and data solutions.",
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
