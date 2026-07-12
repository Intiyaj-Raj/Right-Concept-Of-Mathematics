import "./globals.css";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Preloader } from "@/components/preloader";
import { CustomCursor } from "@/components/interactive";
import { FloatingButtons } from "@/components/sections/footer";
import { Footer } from "@/components/sections/footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://rightconceptofmathematics.com"),
  title: {
    default: "Right Concept of Mathematics | Premium Maths Coaching Institute",
    template: "%s | Right Concept of Mathematics",
  },
  description:
    "Right Concept of Mathematics offers offline mathematics coaching for Class 11, Class 12, JEE Main & JEE Advanced by N. M. Sir. Concept-first teaching, proven results.",
  keywords: [
    "mathematics coaching",
    "JEE maths coaching",
    "JEE Main mathematics",
    "JEE Advanced mathematics",
    "Class 12 maths",
    "Class 11 maths",
    "best maths institute",
    "Right Concept of Mathematics",
    "N. M. Sir",
    "offline maths coaching",
    "board exam maths",
  ],
  authors: [{ name: "Right Concept of Mathematics" }],
  creator: "Intiyaj Ansari",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rightconceptofmathematics.com",
    siteName: "Right Concept of Mathematics",
    title: "Right Concept of Mathematics | Premium Maths Coaching Institute",
    description:
      "Offline mathematics coaching for Class 11, 12, JEE Main & Advanced by N. M. Sir. Concept-first teaching, proven results.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Right Concept of Mathematics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Right Concept of Mathematics | Premium Maths Coaching",
    description:
      "Offline mathematics coaching for Class 11, 12, JEE Main & Advanced by N. M. Sir.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export const viewport = {
  themeColor: "#10B981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Right Concept of Mathematics",
  description:
    "Premier offline mathematics coaching for Class 11, 12, JEE Main & JEE Advanced by N. M. Sir.",
  url: "https://rightconceptofmathematics.com",
  telephone: "+91 95766 10388",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Bihar",
  },
  founder: { "@type": "Person", name: "N. M. Sir" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
