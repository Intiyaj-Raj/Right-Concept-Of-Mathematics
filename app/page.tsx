import { getSeoConfig } from "@/lib/seo";

export const metadata = {
  title: getSeoConfig("/").seoTitle,
  description: getSeoConfig("/").metaDescription,
  alternates: {
    canonical: getSeoConfig("/").canonical,
  },
  openGraph: getSeoConfig("/").openGraph,
  twitter: getSeoConfig("/").twitter,
};

import { Preloader } from "@/components/preloader";

import { CustomCursor } from "@/components/interactive";
import { HeroSlider } from "@/components/sections/hero";
import {
  TrustedBy,
  Statistics,
  WhyChooseUs,
  Features,
} from "@/components/sections/stats-features";
import { Courses, FacultyPreview } from "@/components/sections/courses-faculty";
import {
  Results,
  LearningProcess,
  StudyMaterial,
} from "@/components/sections/results-study";
import {
  Gallery,
  Testimonials,
} from "@/components/sections/gallery-testimonials";
import {
  Achievements,
  FAQs,
  Blogs,
} from "@/components/sections/achievements-faqs-blogs";
import { Contact } from "@/components/sections/contact";
import { Newsletter } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustedBy />
      <Statistics />
      <WhyChooseUs />
      <Features />
      <Courses limit={3} showViewAll />
      <FacultyPreview />
      <Results limit={3} showViewAll />
      <LearningProcess />
      <StudyMaterial />
      <Gallery limit={3} showViewAll />
      <Testimonials />
      <Achievements />
      <FAQs />
      <Blogs limit={3} showViewAll />
      <Contact />
      {/* <Newsletter /> */}
    </>
  );
}
