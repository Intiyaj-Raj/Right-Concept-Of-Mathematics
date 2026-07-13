"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  MapPin,
  School,
  GraduationCap,
  Sparkles,
  ArrowRight,
  BookOpen,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  SectionHeading,
} from "@/components/animation";
import { AuroraBackground, FloatingMathSymbols } from "@/components/decorative";
import {
  TrustedBy,
  Statistics,
  Features,
} from "@/components/sections/stats-features";
import { Achievements } from "@/components/sections/achievements-faqs-blogs";
import { siteConfig } from "@/lib/data";

const visionMission = [
  {
    icon: "Eye",
    title: "Our Vision",
    description:
      "To become the most trusted mathematics coaching institute where every student discovers the joy of learning, builds unshakeable conceptual foundations, and achieves their fullest academic potential.",
  },
  {
    icon: "Heart",
    title: "Our Mission",
    description:
      "To deliver concept-first mathematics education through focused offline classroom coaching, personal mentoring by N. M. Sir, and a learning environment that nurtures curiosity, confidence, and excellence.",
  },
];

const whyChoose = [
  {
    icon: "Target",
    title: "Mathematics Only",
    description:
      "We teach one subject and teach it better than anyone. Single-subject mastery means deeper, more focused learning.",
  },
  {
    icon: "MapPin",
    title: "Offline Classroom Only",
    description:
      "No online distractions. Face-to-face coaching where doubts are resolved instantly and every student matters.",
  },
  {
    icon: "Users",
    title: "Small Batch Size",
    description:
      "Limited students per batch ensures personal attention and interactive learning in every class.",
  },
  {
    icon: "GraduationCap",
    title: "Taught by N. M. Sir",
    description:
      "Every class is personally taught by N. M. Sir. No substitutes, no recorded lectures replacing live teaching.",
  },
  {
    icon: "BookOpen",
    title: "Premium Study Material",
    description:
      "Research-backed notes, formula sheets, and practice sets designed from 15+ years of teaching experience.",
  },
  {
    icon: "Award",
    title: "Proven Results",
    description:
      "20,000+ students taught, 1,500+ top rankers, and a 98% success rate over a decade of excellence.",
  },
];

const offlineBenefits = [
  "Immediate face-to-face doubt resolution during and after class",
  "Focused environment free from online distractions and notifications",
  "Real-time interaction with N. M. Sir and fellow students",
  "Structured schedule that builds discipline and consistency",
  "Peer learning and healthy competition in the classroom",
  "Personal mentoring and progress tracking by N. M. Sir himself",
];

const mathExcellence = [
  {
    title: "Concept Clarity",
    description:
      'Every topic starts with the fundamental "why" before the "how", ensuring deep understanding.',
  },
  {
    title: "Problem-Solving Mastery",
    description:
      "Progressive problem sets from basic to advanced that build analytical thinking.",
  },
  {
    title: "Exam Strategy",
    description:
      "Speed techniques, time management, and negative marking strategies for competitive exams.",
  },
  {
    title: "Real-World Application",
    description:
      "Abstract concepts made concrete with real-world examples and visual demonstrations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        highlight="RCM"
        subtitle="Right Concept of Mathematics is a premier offline coaching institute dedicated exclusively to mathematics, led by N. M. Sir with 15+ years of teaching excellence."
        breadcrumb="About"
        image="/images/right-concept-of-mathematics-building.webp"
      />

      {/* Introduction */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Institute Introduction
              </span>
              <h2 className="font-display text-3xl font-bold sm:text-4xl leading-[1.15] mb-5">
                Where Mathematics Meets{" "}
                <span className="text-gradient">Mastery</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Right Concept of Mathematics (RCM) was founded with a single
                  mission: to teach mathematics the way it should be taught —
                  with clarity, passion, and unwavering focus on concepts. We
                  are not a multi-subject coaching factory. We teach mathematics
                  only, and we teach it in offline classrooms only.
                </p>
                <p>
                  For over 15 years, N. M. Sir has personally taught every batch
                  at RCM. There are no substitute teachers, no online lectures
                  replacing live classes, and no divided attention. When a
                  student joins RCM, they learn directly from N. M. Sir in a
                  focused, face-to-face classroom environment where every doubt
                  is resolved instantly and every student receives personal
                  attention.
                </p>
                <p>
                  We cover Class 11, Class 12, JEE Main, and JEE Advanced
                  mathematics. Our students have consistently achieved
                  extraordinary results — 120+ JEE selections in 2025 alone, and
                  a 98% success rate across board and competitive exams.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-10 blur-2xl" />
                <img
                  src="/images/right-concept-of-mathematics-about2.webp"
                  alt="RCM Classroom"
                  className="relative rounded-3xl premium-shadow"
                  loading="lazy"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 sm:py-28 bg-card/30 border-y border-border overflow-hidden">
        <AuroraBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {visionMission.map((item) => {
              const Icon = item.icon === "Eye" ? Eye : Heart;
              return (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group h-full rounded-2xl border border-border bg-card p-8 premium-shadow transition-all hover:border-primary/40"
                  >
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Our Institute */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Students Choose"
            highlight="RCM"
            subtitle="Six reasons that make Right Concept of Mathematics the preferred choice for serious aspirants."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => {
              const icons = {
                Target,
                MapPin,
                Users,
                GraduationCap,
                BookOpen,
                Award,
              };
              const Icon = icons[item.icon];
              return (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group h-full rounded-2xl border border-border bg-card p-7 premium-shadow transition-all hover:border-primary/40"
                  >
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Offline Classroom Learning Environment */}
      <section className="relative py-20 sm:py-28 bg-card/30 border-y border-border overflow-hidden">
        <AuroraBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-5">
                <School className="h-3.5 w-3.5" />
                Offline Classroom Learning
              </span>
              <h2 className="font-display text-3xl font-bold sm:text-4xl leading-[1.15] mb-5">
                The Power of <span className="text-gradient">Face-to-Face</span>{" "}
                Learning
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                In an era where everything is going online, we believe
                mathematics is best learned in a physical classroom. The offline
                environment at RCM is designed to maximize focus, interaction,
                and results. No notifications, no connectivity issues, no
                isolation — just pure, focused learning.
              </p>
              <ul className="space-y-3">
                {offlineBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-10 blur-2xl" />
                <img
                  src="/images/right-concept-of-mathematics-about3.webp"
                  alt="Offline Classroom"
                  className="relative rounded-3xl premium-shadow"
                  loading="lazy"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Student-Focused Teaching Approach */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <FloatingMathSymbols count={6} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Teaching Approach"
            title="Student-Focused"
            highlight="Teaching"
            subtitle="Every student is unique. Our teaching adapts to each learner's pace, strengths, and weaknesses."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Lightbulb,
                title: "Concept First",
                description:
                  "Fundamentals before formulas. Understanding before memorization.",
              },
              {
                icon: Users,
                title: "Personal Attention",
                description:
                  "Small batches ensure every student gets individual focus from N. M. Sir.",
              },
              {
                icon: Target,
                title: "Progress Tracking",
                description:
                  "Regular assessments identify weak areas for targeted improvement.",
              },
              {
                icon: Sparkles,
                title: "Doubt Resolution",
                description:
                  "Face-to-face doubt clearing after every class, no question left unanswered.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full rounded-2xl border border-border bg-card p-6 text-center premium-shadow transition-all hover:border-primary/40"
                >
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mathematics Excellence */}
      <section className="relative py-20 sm:py-28 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mathematics Excellence"
            title="What Makes Our"
            highlight="Mathematics Special"
            subtitle="We don't just teach formulas. We build mathematical thinkers."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mathExcellence.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full rounded-2xl border border-border bg-card p-6 premium-shadow transition-all hover:border-primary/40"
                >
                  <span className="font-display text-4xl font-bold text-gradient mb-3 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-base font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quality Education + Stats */}
      <Statistics />

      {/* TrustedBy */}
      <TrustedBy />

      {/* Achievements */}
      <Achievements />

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-emerald-600 to-secondary p-8 sm:p-12 text-center premium-shadow">
              <div className="absolute inset-0 math-grid-bg opacity-10" />
              <div className="relative">
                <h2 className="font-display text-2xl font-bold sm:text-3xl text-white mb-3">
                  Ready to Master Mathematics?
                </h2>
                <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-7">
                  Join Right Concept of Mathematics and learn from N. M. Sir in
                  a focused offline classroom. Your journey to mathematical
                  excellence starts here.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/courses"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition-transform hover:scale-105 cursor-hover"
                  >
                    Explore Courses
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 cursor-hover"
                  >
                    Enroll Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
