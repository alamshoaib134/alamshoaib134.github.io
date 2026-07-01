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
  title: "Shoaib Alam | AI Engineer at JPMC",
  description:
    "Shoaib Alam | AI Engineer at JPMC | NLP Researcher (IIT Gandhinagar) | Pioneer of Fiduciary-Grade Hybrid RAG for Institutional Finance",
  keywords: [
    "Shoaib Alam",
    "AI Engineer",
    "JPMC",
    "NLP Researcher",
    "IIT Gandhinagar",
    "RAG",
    "Institutional Finance",
    "Machine Learning",
    "Python",
  ],
  authors: [{ name: "Shoaib Alam" }],
  openGraph: {
    title: "Shoaib Alam | AI Engineer at JPMC",
    description:
      "Shoaib Alam | AI Engineer at JPMC | NLP Researcher (IIT Gandhinagar) | Pioneer of Fiduciary-Grade Hybrid RAG for Institutional Finance",
    url: "https://alamshoaib134.github.io",
    siteName: "Shoaib Alam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Alam | AI Engineer at JPMC",
    description:
      "Shoaib Alam | AI Engineer at JPMC | NLP Researcher (IIT Gandhinagar) | Pioneer of Fiduciary-Grade Hybrid RAG for Institutional Finance",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shoaib Alam",
    url: "https://alamshoaib134.github.io",
    jobTitle: "AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "JPMC",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IIT Gandhinagar",
    },
    description:
      "Shoaib Alam | AI Engineer at JPMC | NLP Researcher (IIT Gandhinagar) | Pioneer of Fiduciary-Grade Hybrid RAG for Institutional Finance",
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
