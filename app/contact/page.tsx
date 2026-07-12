'use client';

import { PageHero } from '@/components/page-hero';
import { Contact } from '@/components/sections/contact';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        highlight="Us"
        subtitle="Have questions about admissions, courses, or scheduling a demo class? We're here to help. Reach out and we'll connect with you on WhatsApp instantly."
        breadcrumb="Contact"
      />
      <Contact />
    </>
  );
}
