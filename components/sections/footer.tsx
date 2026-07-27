"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUp,
  Phone,
  MessageCircle,
  Sigma,
  Send,
  MapPin,
  Mail,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { FadeUp } from "@/components/animation";
import { siteConfig, navLinks, courses, googleMapsEmbed } from "@/lib/data";

/* ===== Newsletter (CTA banner before footer) ===== */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (email) {
      setDone(true);
      setEmail("");
      setTimeout(() => setDone(false), 4000);
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-emerald-600 to-secondary p-8 sm:p-12 premium-shadow">
            <div className="absolute inset-0 math-grid-bg opacity-10" />
            <div className="relative grid items-center gap-6 lg:grid-cols-2">
              <div className="text-white">
                <h2 className="font-display text-2xl font-bold sm:text-3xl mb-3">
                  Stay Updated with RCM
                </h2>
                <p className="text-white/80 text-sm sm:text-base max-w-md">
                  Subscribe to our newsletter for exam tips, study resources,
                  and admission updates. Join 20,000+ subscribers.
                </p>
              </div>
              <form
                onSubmit={submit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border-0 bg-white/15 backdrop-blur px-5 py-3.5 text-sm text-white placeholder:text-white/60 outline-none ring-1 ring-white/30 focus:ring-2 focus:ring-white"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary transition-all"
                >
                  {done ? "Subscribed!" : "Subscribe"}
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ===== Footer ===== */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[hsl(222_47%_8%)] text-white">
      {/* top gradient line */}
      <div className="h-1 w-full bg-brand-gradient" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Logo */}
            <Link href="#" scroll={true} className="mb-6 block">
              <Image
                src="/images/right-concept-of-mathematics-logo.png"
                alt="Right Concept of Mathematics Logo"
                width={160}
                height={160}
                className="h-[90px] w-[90px] object-contain transition-transform duration-300 hover:scale-105 sm:h-[130px] sm:w-[130px] lg:h-[170px] lg:w-[170px]"
                priority
              />
            </Link>

            {/* Brand Name */}

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              {[
                { Icon: Facebook, href: siteConfig.social.facebook },
                { Icon: Instagram, href: siteConfig.social.instagram },
                { Icon: Youtube, href: siteConfig.social.youtube },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-brand-gradient hover:text-white hover:shadow-lg"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-5">
              Our Courses
            </h3>
            <ul className="space-y-2.5">
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/courses`}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:+${siteConfig.phoneRaw}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Bihar, India
              </li>
            </ul>
            {/* mini map */}
            <div className="mt-4 h-28 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Footer Map"
                src={googleMapsEmbed}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-white/60">
              &copy; 2026 Right Concept of Mathematics. All Rights Reserved.
            </p>

            <p className="text-sm text-white/60">
              Designed &amp; Developed by{" "}
              <a
                href="https://intiyajansarifullstackdeveloper.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gradient-amber hover:underline"
              >
                {siteConfig.designedBy}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== Floating Action Buttons ===== */
export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to top */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white premium-shadow transition-transform hover:scale-110 cursor-hover"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
      {/* Call */}
      <motion.a
        href={`tel:+${siteConfig.phoneRaw}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white premium-shadow cursor-hover"
      >
        <Phone className="h-5 w-5" />
      </motion.a>
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I have an enquiry about admissions.")}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        aria-label="WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white premium-shadow cursor-hover"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-30" />
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
