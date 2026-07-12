"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowDown } from "lucide-react";
import { FloatingMathSymbols } from "@/components/decorative";

export function PageHero({
  title,
  highlight,
  subtitle,
  breadcrumb,
  image,
}: {
  title: string;
  highlight?: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex items-center">
      {/* Ambient background — same tokens as before, no new colors */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <FloatingMathSymbols count={6} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT — text */}
          <div className="lg:col-span-6 xl:col-span-5 text-left">
            {breadcrumb && (
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8"
              >
                <Link
                  href="/"
                  className="hover:text-primary transition-colors cursor-hover"
                >
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-primary font-medium">{breadcrumb}</span>
              </motion.nav>
            )}

            {/* Signature: a proof-style tick mark instead of a generic rule */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="font-display text-sm text-primary/70 select-none">
                ∴
              </span>
              <span className="h-px w-12 bg-brand-gradient" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.1]"
            >
              {title}{" "}
              {highlight && <span className="text-gradient">{highlight}</span>}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex items-center gap-4"
            >
              <Link
                href="tel:+919576610388"
                className="cursor-hover inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="cursor-hover inline-flex items-center gap-2 rounded-full border border-current/15 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
              >
                Learn more
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — image */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            {image ? (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="relative aspect-[4/5] sm:aspect-[5/4] w-full"
              >
                {/* Corner brackets — a proof/QED frame instead of a generic card shadow */}
                <span className="absolute -top-3 -left-3 h-10 w-10 border-l-2 border-t-2 border-primary/50 rounded-tl-xl z-20" />
                <span className="absolute -bottom-3 -right-3 h-10 w-10 border-r-2 border-b-2 border-secondary/50 rounded-br-xl z-20" />

                <div className="relative h-full w-full overflow-hidden rounded-[2rem] ring-1 ring-current/10">
                  <motion.img
                    src={image}
                    alt=""
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 mix-blend-overlay" />
                </div>
              </motion.div>
            ) : (
              <div className="aspect-[5/4] w-full rounded-[2rem] gradient-mesh" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
