"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Quote,
  Star,
  X,
  ZoomIn,
  ArrowRight,
  Camera,
  Sparkles,
} from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  SectionHeading,
} from "@/components/animation";
import { galleryImages, galleryCategories, testimonials } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

/* ===== Gallery ===== */
export function Gallery({
  limit,
  showViewAll,
}: {
  limit?: number;
  showViewAll?: boolean;
}) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const allImages = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter],
  );
  const filtered = limit ? allImages.slice(0, limit) : allImages;

  // For homepage preview: show a clean 6-image uniform grid
  if (limit) {
    return (
      <section id="gallery" className="relative py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments of"
            highlight="Learning & Joy"
            subtitle="A glimpse into our vibrant classrooms, events, and achievements."
          />

          {/* Uniform 6-image grid */}
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-3">
            {galleryImages.slice(0, 6).map((img, i) => (
              <StaggerItem key={img.src + i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`group relative overflow-hidden rounded-2xl border border-border premium-shadow cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2.5 py-1 text-[10px] font-semibold text-white">
                      <Camera className="h-2.5 w-2.5" />
                      {img.category}
                    </span>
                    <p className="mt-1.5 text-sm font-medium text-foreground">
                      {img.alt}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full glass text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Stats row */}
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-center">
              {galleryCategories
                .filter((c) => c !== "All")
                .map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-brand-gradient" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {cat}{" "}
                      <span className="font-bold text-foreground">
                        (
                        {galleryImages.filter((g) => g.category === cat).length}
                        )
                      </span>
                    </span>
                  </div>
                ))}
            </div>
          </FadeUp>
        </div>

        {showViewAll && (
          <FadeUp delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-semibold text-white premium-shadow transition-transform hover:scale-105 cursor-hover"
              >
                <Sparkles className="h-4 w-4" />
                Explore Full Gallery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        )}

        {/* Lightbox */}
        <GalleryLightbox
          lightbox={lightbox}
          onClose={() => setLightbox(null)}
        />
      </section>
    );
  }

  // Full gallery page version with filter tabs + masonry grid
  return (
    <section id="gallery" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments of"
          highlight="Learning & Joy"
          subtitle="A glimpse into our vibrant classrooms, events, and achievements."
        />

        {/* Filter tabs with counts */}
        <FadeUp className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {galleryCategories.map((cat) => {
            const count =
              cat === "All"
                ? galleryImages.length
                : galleryImages.filter((g) => g.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all cursor-hover ${
                  filter === cat
                    ? "bg-brand-gradient text-white premium-shadow"
                    : "border border-border bg-card hover:bg-muted hover:border-primary/40"
                }`}
              >
                {cat}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${filter === cat ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </FadeUp>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src + i}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-border premium-shadow cursor-pointer ${img.span}`}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2.5 py-1 text-[10px] font-semibold text-white">
                    <Camera className="h-2.5 w-2.5" />
                    {img.category}
                  </span>
                  <p className="mt-1.5 text-sm font-medium text-foreground">
                    {img.alt}
                  </p>
                </div>
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full glass text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <FadeUp className="text-center py-20">
            <p className="text-muted-foreground">
              No images in this category yet.
            </p>
          </FadeUp>
        )}
      </div>

      <GalleryLightbox lightbox={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}

/* ===== Shared lightbox ===== */
function GalleryLightbox({ lightbox, onClose }) {
  return (
    <AnimatePresence>
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <button
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full glass cursor-hover"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl"
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-full rounded-2xl premium-shadow object-contain"
            />
            <div className="mt-4 flex items-center gap-2 rounded-xl glass px-4 py-3">
              <Camera className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {lightbox.alt}
              </span>
              <span className="ml-auto rounded-full bg-brand-gradient px-2.5 py-0.5 text-[10px] font-semibold text-white">
                {lightbox.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ===== Testimonials (auto slider) ===== */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 bg-card/30 border-y border-border overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Students "
          highlight="Say"
          subtitle="Real stories from the RCM family. Their success is our greatest reward."
        />
        <FadeUp>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group h-full rounded-2xl border border-border bg-card p-6 premium-shadow transition-all hover:border-primary/40"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-9 w-9 text-primary/30" />
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${t.type === "Student" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}
                    >
                      {t.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-display text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeUp>
      </div>
    </section>
  );
}
