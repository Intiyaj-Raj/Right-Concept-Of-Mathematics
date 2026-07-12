'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Clock, IndianRupee, CheckCircle2, ArrowRight, GraduationCap,
  BookOpen, ClipboardCheck, MessageCircle, Sparkles, Users,
} from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animation';
import { AuroraBackground } from '@/components/decorative';
import { Courses as CoursesPreview } from '@/components/sections/courses-faculty';
import { LearningProcess } from '@/components/sections/results-study';
import { courses, siteConfig } from '@/lib/data';

const levelColors = {
  Foundation: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Board + Competitive': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Competitive: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Advanced: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
};

function CourseDetail({ course, index }) {
  const isEven = index % 2 === 0;
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card premium-shadow">
      {/* Header with image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-30 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold mb-3 ${levelColors[course.level]}`}>
            {course.level}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">{course.title}</h2>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8">
        {/* Overview */}
        <div className="mb-6">
          <h3 className="font-display text-lg font-bold mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Course Overview
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{course.overview}</p>
        </div>

        {/* Quick info grid */}
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              <Clock className="h-4 w-4" />
              Duration
            </div>
            <p className="font-display text-base font-bold">{course.duration}</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              <GraduationCap className="h-4 w-4" />
              Eligibility
            </div>
            <p className="text-sm font-bold leading-snug">{course.eligibility}</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              <IndianRupee className="h-4 w-4" />
              Course Fee
            </div>
            <p className="font-display text-base font-bold text-gradient">{course.fee}</p>
          </div>
        </div>

        {/* Offline coaching note */}
        <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 p-4 flex items-start gap-3">
          <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-semibold text-primary">Offline Classroom Coaching Only</p>
            <p className="text-xs text-muted-foreground mt-0.5">All classes are conducted in-person by N. M. Sir. No online classes.</p>
          </div>
        </div>

        {/* Details grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div>
            <h4 className="font-display text-sm font-bold mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Study Material
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{course.studyMaterial}</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold mb-2 flex items-center gap-2">
              <ClipboardCheck className="h-4 w-4 text-primary" />
              Regular Tests
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{course.tests}</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold mb-2 flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              Doubt Support
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{course.doubtSupport}</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Course Features
            </h4>
            <ul className="space-y-1.5">
              {course.courseFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Topics */}
        <div className="mb-6">
          <h4 className="font-display text-sm font-bold mb-3">Key Topics Covered</h4>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center gap-1 rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <CheckCircle2 className="h-3 w-3 text-primary" />
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/30"
        >
          Enroll in {course.title}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Our"
        highlight="Courses"
        subtitle="We teach mathematics only — for Class 11, Class 12, JEE Main, and JEE Advanced. All courses in offline classroom mode, taught personally by N. M. Sir."
        breadcrumb="Courses"
        image="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Courses list */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <AuroraBackground />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-10">
            {courses.map((course, i) => (
              <StaggerItem key={course.slug}>
                <CourseDetail course={course} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* WhatsApp counselling */}
          <FadeUp delay={0.2}>
            <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl glass p-6 sm:flex-row sm:p-8">
              <div className="flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-accent" />
                <div>
                  <p className="font-display text-lg font-bold">Need help choosing a course?</p>
                  <p className="text-sm text-muted-foreground">Get free counselling from N. M. Sir on WhatsApp.</p>
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

      {/* Learning Process */}
      <LearningProcess />
    </>
  );
}
