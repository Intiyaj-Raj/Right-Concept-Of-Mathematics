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
    title: "Right Concept of Mathematics | best Maths Coaching Institute",
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
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#10B981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { buildJsonLd } from "@/lib/schema";

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = buildJsonLd({
    baseUrl: "https://rightconceptofmathematics.com",
    siteName: "Right Concept of Mathematics",
    facultyName: "N. M. Sir",
    facultyRole: "Mathematics Faculty",
    phone: "+91 95766 10388",
    address: {
      addressCountry: "IN",
      addressRegion: "Bihar",
    },
    courses: [
      {
        name: "Class 11 Maths",
        description:
          "Concept-first mathematics coaching for Class 11 students in Motihari.",
        url: "https://rightconceptofmathematics.com/courses#class-11-maths",
      },
      {
        name: "Class 12 Maths",
        description:
          "Offline classroom coaching for Class 12 maths with concept clarity in Motihari.",
        url: "https://rightconceptofmathematics.com/courses#class-12-maths",
      },
      {
        name: "JEE Main Maths",
        description:
          "Best Maths Coaching in Motihari for JEE Main mathematics by N. M. Sir.",
        url: "https://rightconceptofmathematics.com/courses#jee-main-maths",
      },
      {
        name: "JEE Advanced Maths",
        description:
          "Advanced problem-solving coaching for JEE Advanced maths in Motihari by N. M. Sir.",
        url: "https://rightconceptofmathematics.com/courses#jee-advanced-maths",
      },
    ],
    breadcrumbs: [
      { name: "Home", item: "https://rightconceptofmathematics.com/" },
      {
        name: "Mathematics Coaching",
        item: "https://rightconceptofmathematics.com/",
      },
    ],
    faqs: [
      {
        question: "What is the teaching mode at Right Concept of Mathematics?",
        answer:
          "We provide offline classroom coaching only. N. M. Sir personally teaches every batch for concept-first learning.",
      },
      {
        question: "Which exams do you prepare for?",
        answer:
          "We prepare students for Class 11, Class 12, JEE Main, and JEE Advanced through concept-based maths coaching.",
      },
    ],
    reviews: [
      {
        author: "Student",
        ratingValue: 5,
        text: "The teaching style of N. M. Sir made concepts crystal clear. Best Maths Coaching in Motihari for my JEE preparation.",
      },
    ],
    imageUrls: [
      "https://rightconceptofmathematics.com/images/right-concept-of-mathematics-hero.avif",
      "https://rightconceptofmathematics.com/images/right-concept-of-mathematics-result.webp",
    ],
  });

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
