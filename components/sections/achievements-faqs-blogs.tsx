'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Award, Trophy, Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem, SectionHeading } from '@/components/animation';
import { AuroraBackground } from '@/components/decorative';
import { achievements, faqs, blogs, blogCategories } from '@/lib/data';

/* ===== Achievements Timeline ===== */
export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28 overflow-hidden">
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Awards & Achievements"
          title="A Legacy of"
          highlight="Excellence"
          subtitle="Milestones that mark our journey of transforming education."
        />
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent sm:-translate-x-1/2" />
          <StaggerContainer className="space-y-8">
            {achievements.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <StaggerItem key={item.year}>
                  <div className={`relative flex items-center ${isLeft ? 'sm:justify-start' : 'sm:justify-end'} pl-12 sm:pl-0`}>
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-white premium-shadow"
                      >
                        {i === 1 ? <Trophy className="h-4 w-4" /> : <Award className="h-4 w-4" />}
                      </motion.div>
                    </div>
                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`w-full sm:w-[45%] rounded-2xl border border-border bg-card p-5 premium-shadow transition-all hover:border-primary/40 ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent mb-2">
                        <Calendar className="h-3 w-3" />
                        {item.year}
                      </span>
                      <h3 className="font-display text-base font-bold mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ===== FAQs ===== */
export function FAQs() {
  return (
    <section id="faqs" className="relative py-20 sm:py-28 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions? We've Got"
          highlight="Answers"
          subtitle="Everything you need to know before joining the RCM family."
        />
        <FadeUp>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-5 premium-shadow transition-colors data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left font-display text-base font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}

/* ===== Blogs ===== */
export function Blogs({ limit, showViewAll }) {
  const [category, setCategory] = useState('All');
  const allFiltered = category === 'All' ? blogs : blogs.filter((b) => b.category === category);
  const filtered = limit ? allFiltered.slice(0, limit) : allFiltered;

  return (
    <section id="blog" className="relative py-20 sm:py-28 overflow-hidden">
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest Blogs"
          title="Insights, Tips &"
          highlight="Stories"
          subtitle="Expert advice and inspiration to fuel your learning journey."
        />

        {/* Search + categories */}
        <FadeUp className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-hover ${
                  category === cat
                    ? 'bg-brand-gradient text-white'
                    : 'border border-border bg-card hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-4 text-sm outline-none focus:border-primary"
            />
          </div>
        </FadeUp>

        {/* Blog grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card premium-shadow transition-all hover:border-primary/40"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-white">
                  <Tag className="h-3 w-3" />
                  {blog.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {blog.date}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{blog.excerpt}</p>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {showViewAll && (
          <FadeUp delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white premium-shadow transition-transform hover:scale-105 cursor-hover"
              >
                Read All Articles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
