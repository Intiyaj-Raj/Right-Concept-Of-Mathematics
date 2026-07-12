'use client';

import { PageHero } from '@/components/page-hero';
import { Gallery } from '@/components/sections/gallery-testimonials';

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our"
        highlight="Gallery"
        subtitle="A glimpse into our vibrant offline classrooms, events, and student achievements at Right Concept of Mathematics."
        breadcrumb="Gallery"
        image="https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Gallery />
    </>
  );
}
