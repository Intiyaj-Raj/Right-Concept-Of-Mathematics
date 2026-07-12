"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  School,
  BookOpen,
  Target,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  MessageCircle,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animation";
import { AuroraBackground, FloatingMathSymbols } from "@/components/decorative";
import { faculty as f, siteConfig } from "@/lib/data";

export default function FacultyPage() {
  return (
    <>
      <PageHero
        title="Meet"
        highlight="N. M. Sir"
        subtitle="The founder and sole faculty member of Right Concept of Mathematics. 15+ years of teaching excellence in mathematics."
        breadcrumb="Faculty"
        image="/images/right-concept-of-mathematics-author.webp"
      />

      {/* Faculty Profile */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <AuroraBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 items-start">
            {/* Photo */}
            <FadeUp className="lg:col-span-2">
              <div className="sticky top-28">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 premium-shadow transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand/20"
                >
                  <div className="relative h-[420px] sm:h-[500px] lg:h-[620px] overflow-hidden">
                    {/* Image */}
                    <motion.img
                      src={f.image}
                      alt={f.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Dark Overlay — richer gradient, deepens slightly on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/10 transition-opacity duration-500 group-hover:from-slate-950 group-hover:via-slate-900/80" />

                    {/* Subtle top vignette so the badge always reads clearly */}
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/40 to-transparent" />

                    {/* Experience Badge — glassmorphism instead of flat gradient */}
                    <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold text-white shadow-xl backdrop-blur-md">
                      {f.experience}
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-center">
                      {/* thin accent line for a bit of editorial polish */}
                      <div className="mx-auto mb-4 h-px w-10 bg-white/30 transition-all duration-500 group-hover:w-16 group-hover:bg-white/60" />

                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                        {f.name}
                      </h2>

                      <p className="mt-2 text-sm sm:text-base text-white/70">
                        {f.role}
                      </p>

                      <div className="mt-4 flex justify-center gap-1">
                        {[...Array(5)].map((_, s) => (
                          <Star
                            key={s}
                            className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Faint inner ring on hover for a "premium frame" feel */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/15" />
                  </div>
                </motion.div>
              </div>
            </FadeUp>

            {/* Info */}
            <FadeUp delay={0.15} className="lg:col-span-3">
              <div className="space-y-6">
                {/* Quick facts */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-5 premium-shadow">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Subject
                      </span>
                    </div>
                    <p className="font-display text-base font-bold">
                      {f.subject}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-5 premium-shadow">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Teaching Mode
                      </span>
                    </div>
                    <p className="font-display text-base font-bold">{f.mode}</p>
                  </div>
                </div>

                {/* Classes covered */}
                <div className="rounded-2xl border border-border bg-card p-6 premium-shadow">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <School className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-bold">
                      Classes Covered
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {f.classes.map((cls) => (
                      <span
                        key={cls}
                        className="rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white"
                      >
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Introduction */}
                <div className="rounded-2xl border border-border bg-card p-6 premium-shadow">
                  <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Professional Introduction
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.introduction}
                  </p>
                </div>

                {/* Teaching Methodology */}
                <div className="rounded-2xl border border-border bg-card p-6 premium-shadow">
                  <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Teaching Methodology
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {f.methodology}
                  </p>
                  <ul className="space-y-2.5">
                    {f.teachingApproach.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Students Choose */}
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 premium-shadow">
                  <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                    <Award className="h-5 w-5" />
                    Why Students Choose N. M. Sir
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.whyChoose}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white premium-shadow transition-transform hover:scale-105 cursor-hover"
                  >
                    Book a Free Demo Class
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi N. M. Sir, I would like to know more about your mathematics coaching.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors cursor-hover"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Teaching Approach Highlights */}
      <section className="relative py-20 sm:py-28 bg-card/30 border-y border-border overflow-hidden">
        <FloatingMathSymbols count={6} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Teaching Highlights
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl leading-[1.1]">
              What Makes N. M. Sir{" "}
              <span className="text-gradient">Different</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Personally Teaches Every Batch",
                description:
                  "No substitute teachers. No recorded lectures. Every single class is taught by N. M. Sir himself.",
              },
              {
                icon: Target,
                title: "Concept-First Approach",
                description:
                  'Every topic starts with fundamentals. Students understand the "why" before the "how".',
              },
              {
                icon: MessageCircle,
                title: "Instant Doubt Resolution",
                description:
                  "Face-to-face doubt clearing in the classroom. No question is ever left unanswered.",
              },
              {
                icon: BookOpen,
                title: "15+ Years of Experience",
                description:
                  "Two decades of teaching mathematics to 20,000+ students with a proven track record.",
              },
              {
                icon: Award,
                title: "Proven Results",
                description:
                  "120+ JEE selections in 2025. 1,500+ top rankers. A 98% success rate.",
              },
              {
                icon: Sparkles,
                title: "Mathematics Only",
                description:
                  "Single-subject mastery. N. M. Sir focuses exclusively on mathematics, not multiple subjects.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full rounded-2xl border border-border bg-card p-7 premium-shadow transition-all hover:border-primary/40"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
