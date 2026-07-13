"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import {
  Trophy,
  Award,
  Medal,
  Star,
  TrendingUp,
  Quote,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  SectionHeading,
} from "@/components/animation";
import { AuroraBackground, FloatingMathSymbols } from "@/components/decorative";
import { StatCounter } from "@/components/stat-counter";
import { Achievements } from "@/components/sections/achievements-faqs-blogs";
import { results, resultStats, testimonials } from "@/lib/data";

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Our"
        highlight="Results"
        subtitle="Real students, real results. Meet the achievers who turned their dreams into reality with N. M. Sir's guidance."
        breadcrumb="Results"
        image="/images/right-concept-of-mathematics-result.webp"
      />

      {/* Result Statistics */}
      <section className="relative py-20 sm:py-28 overflow-hidden gradient-mesh">
        <AuroraBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Achievement Statistics"
            title="Numbers That Speak"
            highlight="Excellence"
            subtitle="A decade of shaping brilliant minds and building successful careers."
          />
          <StaggerContainer className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {resultStats.map((stat) => {
              const Icon = Icons[stat.icon];
              return (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative h-full rounded-2xl glass p-6 sm:p-8 premium-shadow text-center"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform group-hover:scale-110 group-hover:rotate-6">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <div className="font-display text-3xl font-bold sm:text-4xl text-gradient">
                      <StatCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Rank Holders / Result Cards */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <FloatingMathSymbols count={6} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Rank Holders"
            title="Meet Our"
            highlight="Top Achievers"
            subtitle="These are the students who proved that with the right concept, anything is possible."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((topper, i) => (
              <StaggerItem key={topper.name}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card premium-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={topper.image}
                      alt={topper.name}
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
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold">
                      {topper.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {topper.exam}
                    </p>
                    <div className="mt-3 flex items-center gap-1">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          className="h-3.5 w-3.5 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    {topper.testimonial && (
                      <p className="mt-3 text-xs text-muted-foreground italic leading-relaxed">
                        "{topper.testimonial}"
                      </p>
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="relative py-20 sm:py-28 bg-card/30 border-y border-border overflow-hidden">
        <AuroraBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Performance Highlights"
            title="Consistent"
            highlight="Excellence"
            subtitle="Year after year, our students set new benchmarks in mathematics."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Trophy,
                value: 120,
                suffix: "+",
                label: "JEE Selections 2025",
              },
              {
                icon: Award,
                value: 350,
                suffix: "+",
                label: "Board 90+ Scorers",
              },
              { icon: Medal, value: 18, suffix: "", label: "Top 100 Ranks" },
              {
                icon: TrendingUp,
                value: 98,
                suffix: "%",
                label: "Success Rate",
              },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-border bg-card p-6 text-center premium-shadow transition-all hover:border-primary/40"
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div className="font-display text-3xl font-bold text-gradient">
                    <StatCounter end={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Success Stories"
            title="What Our Students"
            highlight="Say"
            subtitle="Real stories from real achievers who walked the RCM path."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Achievements Timeline */}
      <Achievements />
    </>
  );
}
