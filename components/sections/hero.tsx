"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Parallax,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { heroSlides } from "@/lib/data";
import { FloatingMathSymbols } from "@/components/decorative";
import { MagneticButton, RippleButton } from "@/components/interactive";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function HeroSlide({ slide, active, mousePos }) {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with zoom + parallax */}
      <motion.div
        className="absolute inset-0"
        animate={active ? { scale: [1.1, 1.18, 1.1] } : { scale: 1.1 }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: mousePos.x * -15,
          y: mousePos.y * -15,
        }}
      >
        <img
          src={slide.image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 mix-blend-overlay" />
      </motion.div>

      {/* Floating math symbols */}
      <FloatingMathSymbols count={10} />

      {/* Animated formula */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="hidden md:block absolute right-12 top-1/3 z-10"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="glass rounded-2xl px-6 py-4 font-display text-xl text-primary premium-shadow"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {slide.formula}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <AnimatePresence>
            {active && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6 backdrop-blur"
              >
                <Sparkles className="h-3.5 w-3.5" />
                {slide.badge}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Title with word reveal */}
          <AnimatePresence>
            {active && (
              <motion.h1
                key={slide.id}
                className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                  },
                }}
              >
                {slide.title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    variants={{
                      hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    {word === slide.highlight ? (
                      <span className="text-gradient">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.h1>
            )}
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence>
            {active && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed"
              >
                {slide.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* CTAs */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link href={slide.primaryCta.href}>
                  <MagneticButton className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white premium-shadow transition-transform">
                    {slide.primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                </Link>
                <Link href={slide.secondaryCta.href}>
                  <RippleButton className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-card/70 transition-colors">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </span>
                    {slide.secondaryCta.label}
                  </RippleButton>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const swiperRef = useRef(null);

  useEffect(() => {
    function onMove(e) {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        onSwiper={(s) => (swiperRef.current = s)}
        className="h-full w-full"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide
              slide={slide}
              active={i === activeIndex}
              mousePos={mousePos}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom nav arrows */}
      <button
        className="hero-prev hidden md:flex absolute left-4 top-1/2 z-30 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full glass border border-border cursor-hover transition-all hover:bg-primary hover:text-white"
        aria-label="Previous slide"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="hero-next hidden md:flex absolute right-4 top-1/2 z-30 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full glass border border-border cursor-hover transition-all hover:bg-primary hover:text-white"
        aria-label="Next slide"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
