'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem, SectionHeading } from '@/components/animation';
import { StatCounter } from '@/components/stat-counter';
import { Marquee, AuroraBackground } from '@/components/decorative';
import { stats, trustedBy, whyChooseUs, features } from '@/lib/data';

/* ===== Trusted By (marquee) ===== */
export function TrustedBy() {
  return (
    <section className="relative py-14 border-y border-border bg-card/30">
      <FadeUp className="text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by students preparing for
        </p>
      </FadeUp>
      <Marquee items={trustedBy} speed={32} />
    </section>
  );
}

/* ===== Statistics Counter ===== */
export function Statistics() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden gradient-mesh">
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Impact"
          title="Numbers That Speak"
          highlight="Excellence"
          subtitle="A decade of shaping brilliant minds and building successful careers."
        />
        <StaggerContainer className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => {
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
  );
}

/* ===== Why Choose Us ===== */
export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Right Way to Learn"
          highlight="Mathematics"
          subtitle="We don't just teach maths. We build thinkers, problem-solvers, and future leaders."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 premium-shadow transition-all hover:border-primary/40"
                >
                  {/* hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-primary/5 group-hover:to-secondary/5" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ===== Features (Bento grid) ===== */
export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need to"
          highlight="Succeed"
          subtitle="Modern tools and resources designed for 2026 and beyond."
        />
        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Large feature */}
          <FadeUp className="lg:col-span-2 lg:row-span-2">
            <div className="group relative h-full min-h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white premium-shadow">
              <div className="absolute inset-0 math-grid-bg opacity-10" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <Icons.MonitorPlay className="h-12 w-12 mb-5 opacity-90" />
                  <h3 className="font-display text-2xl font-bold sm:text-3xl mb-3">
                    Smart Interactive Classrooms
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base max-w-md leading-relaxed">
                    Learn in immersive digital classrooms with interactive boards, real-time collaboration, and visual demonstrations that make complex concepts crystal clear.
                  </p>
                </div>
                <div className="flex gap-6 mt-6">
                  <div>
                    <div className="font-display text-2xl font-bold">50+</div>
                    <div className="text-xs text-white/70">Smart Boards</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">4K</div>
                    <div className="text-xs text-white/70">Recording</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {features.slice(0, 4).map((feature, i) => {
            const Icon = Icons[feature.icon];
            return (
              <FadeUp key={feature.title} delay={0.1 * (i + 1)}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group h-full rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:premium-shadow"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-white">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="font-display text-base font-bold mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
