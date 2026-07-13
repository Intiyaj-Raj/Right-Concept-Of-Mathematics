"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FadeUp } from "@/components/animation";
import { AuroraBackground } from "@/components/decorative";
import { blogs, blogCategories } from "@/lib/data";

export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  let filtered =
    category === "All" ? blogs : blogs.filter((b) => b.category === category);
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q),
    );
  }

  return (
    <>
      <PageHero
        title="Our"
        highlight="Blog"
        subtitle="Expert advice, study tips, and inspiring stories to fuel your mathematics learning journey."
        breadcrumb="Blog"
        image="/images/right-concept-of-mathematics-blog-hero.webp"
      />

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <AuroraBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search + categories */}
          <FadeUp className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-hover ${
                    category === cat
                      ? "bg-brand-gradient text-white"
                      : "border border-border bg-card hover:bg-muted"
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                viewport={{ once: true, margin: "-60px" }}
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {blog.excerpt}
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <FadeUp className="text-center py-20">
              <p className="text-muted-foreground">
                No articles found. Try a different search or category.
              </p>
            </FadeUp>
          )}
        </div>
      </section>
    </>
  );
}
