'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Clock, IndianRupee, ArrowRight, CheckCircle2, Sparkles, GraduationCap,
  MapPin, School, Award, Target, Users, BookOpen,
} from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem, SectionHeading } from '@/components/animation';
import { AuroraBackground } from '@/components/decorative';
import { courses, faculty as facultyData, siteConfig } from '@/lib/data';

const levelColors = {
  Foundation: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Board + Competitive': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Competitive: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Advanced: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
};

export function Courses({ limit, showViewAll }) {
  const displayCourses = limit ? courses.slice(0, limit) : courses;
  return (
    <section id="courses" className="relative py-20 sm:py-28 overflow-hidden">
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Courses"
          title="Mathematics Courses for"
          highlight="Every Goal"
          subtitle="We teach mathematics only — for Class 11, Class 12, JEE Main, and JEE Advanced. All in offline classroom mode."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayCourses.map((course) => (
            <StaggerItem key={course.slug}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card premium-shadow transition-all hover:border-primary/40"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-30 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        {topic}
                      </span>
                    ))}
                    {course.topics.length > 3 && (
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground">
                        +{course.topics.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-border pt-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-0.5 font-display text-lg font-bold text-gradient">
                      <IndianRupee className="h-4 w-4" />
                      {course.fee.replace('\u20b9', '')}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/30"
                  >
                    Enroll Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {showViewAll && (
          <FadeUp delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white premium-shadow transition-transform hover:scale-105 cursor-hover"
              >
                View All Courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        )}

        {/* CTA banner */}
        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl glass p-6 sm:flex-row sm:p-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-accent" />
              <div>
                <p className="font-display text-lg font-bold">Not sure which course fits you?</p>
                <p className="text-sm text-muted-foreground">Talk to N. M. Sir for free guidance.</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi, I need guidance on choosing the right course.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white premium-shadow"
            >
              Get Free Counselling
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ===== Faculty Preview (Homepage) ===== */
export function FacultyPreview() {
  return (
    <section id="faculty" className="relative py-20 sm:py-28 bg-card/30 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Faculty"
          title="Learn from"
          highlight="N. M. Sir"
          subtitle="The sole faculty member and founder of Right Concept of Mathematics. 15+ years of teaching excellence."
        />

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card premium-shadow"
          >
            <div className="grid md:grid-cols-2">
              {/* Photo */}
              <div className="relative h-80 md:h-full overflow-hidden">
                <motion.img
                  src={facultyData.image}
                  alt={facultyData.name}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
                <div className="absolute top-4 right-4 rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  {facultyData.experience}
                </div>
              </div>

              {/* Info */}
              <div className="p-7 sm:p-9">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {facultyData.role}
                </span>
                <h3 className="font-display text-3xl font-bold mb-2">{facultyData.name}</h3>
                <p className="text-sm font-medium text-secondary mb-4">{facultyData.subject}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {facultyData.introduction}
                </p>

                {/* Teaching mode */}
                <div className="mb-5 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{facultyData.mode}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm">
                    <School className="h-4 w-4 text-primary" />
                    <span className="font-medium">Classes: {facultyData.classes.join(', ')}</span>
                  </div>
                </div>

                {/* Classes tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {facultyData.classes.map((cls) => (
                    <span
                      key={cls}
                      className="rounded-lg bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      {cls}
                    </span>
                  ))}
                </div>

                <Link
                  href="/faculty"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white premium-shadow transition-transform hover:scale-105 cursor-hover"
                >
                  View Full Profile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
