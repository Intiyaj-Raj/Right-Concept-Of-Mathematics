"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Trophy, Award, Medal, Download, Star, ArrowRight } from "lucide-react";
import {
  FadeUp,
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
  SectionHeading,
} from "@/components/animation";
import { AuroraBackground, FloatingMathSymbols } from "@/components/decorative";
import { results, learningProcess, studyMaterials } from "@/lib/data";

/* ===== Results / Toppers ===== */
export function Results({ limit, showViewAll }) {
  const displayResults = limit ? results.slice(0, limit) : results;
  return (
    <section
      id="results"
      className="relative py-20 sm:py-28 overflow-hidden gradient-mesh"
    >
      <AuroraBackground />
      <FloatingMathSymbols count={6} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Top Results"
          title="Our Toppers Make Us"
          highlight="Proud"
          subtitle="Real students, real results. Meet the achievers who turned their dreams into reality."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayResults.map((topper, i) => (
            <StaggerItem key={topper.name}>
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card premium-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={topper.image}
                    alt={topper.alt}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold text-white shadow-lg">
                    {i < 3 ? (
                      <Medal className="h-3.5 w-3.5" />
                    ) : (
                      <Award className="h-3.5 w-3.5" />
                    )}
                    {topper.rank}
                  </div>
                  <div className="absolute top-3 right-3 rounded-full glass px-3 py-1.5 text-[11px] font-bold text-primary">
                    {topper.score}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold">
                    {topper.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {topper.exam}
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className="h-3.5 w-3.5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {showViewAll && (
          <FadeUp delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                href="/results"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white premium-shadow transition-transform hover:scale-105 cursor-hover"
              >
                View All Results
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

/* ===== Learning Process Timeline ===== */
export function LearningProcess() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Teach"
          title="A Proven 5-Step"
          highlight="Learning Journey"
          subtitle="Every student follows a structured path from concept to mastery."
        />
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-primary via-secondary to-accent lg:block" />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {learningProcess.map((item) => {
              const Icon = Icons[item.icon];
              return (
                <StaggerItem key={item.step}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative rounded-2xl border border-border bg-card p-6 text-center premium-shadow transition-all hover:border-primary/40"
                  >
                    {/* Step number circle */}
                    <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white transition-transform group-hover:scale-110 group-hover:rotate-6">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ===== Study Materials ===== */
export function StudyMaterial() {
  return (
    <section
      id="study-material"
      className="relative py-20 sm:py-28 bg-card/30 border-y border-border overflow-hidden"
    >
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Study Material"
          title="Premium Resources at Your"
          highlight="Fingertips"
          subtitle="Download high-quality notes, assignments, and practice papers curated by experts."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {studyMaterials.map((mat, i) => {
            const Icon = Icons[mat.icon];
            const dir = i % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                key={mat.title}
                initial={{ opacity: 0, x: dir === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 premium-shadow transition-all hover:border-primary/40"
                >
                  {/* glow */}
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${mat.tag === "Free" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"}`}
                      >
                        {mat.tag}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                      {mat.type}
                    </p>
                    <h3 className="font-display text-base font-bold mb-2">
                      {mat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {mat.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-4">
                      <span>{mat.size}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                      <span>{mat.pages}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
