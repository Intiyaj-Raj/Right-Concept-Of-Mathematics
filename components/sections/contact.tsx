'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Phone, Mail, MapPin, Send, CheckCircle2, Loader2, MessageCircle, Clock,
} from 'lucide-react';
import { FadeUp, FadeLeft, FadeRight, SectionHeading } from '@/components/animation';
import { AuroraBackground } from '@/components/decorative';
import { siteConfig, googleMapsEmbed } from '@/lib/data';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .min(10, 'Enter a valid 10-digit phone number')
    .regex(/^[0-9+\-\s]+$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  class: z.string().min(1, 'Please select a class'),
  course: z.string().min(1, 'Please select a course'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

const classOptions = ['Class 11', 'Class 12', 'JEE Main', 'JEE Advanced'];
const courseOptions = [
  'Class 11 Mathematics',
  'Class 12 Mathematics',
  'JEE Main Mathematics',
  'JEE Advanced Mathematics',
];

export function Contact() {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    setSubmitting(true);
    const now = new Date();
    const date = now.toLocaleDateString('en-IN');
    const time = now.toLocaleTimeString('en-IN');

    const message = `New Admission Enquiry

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Class: ${data.class}
Course: ${data.course}
City: ${data.city}
Message: ${data.message}
Date: ${date}
Time: ${time}`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      window.open(url, '_blank');
      reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 800);
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60';

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden gradient-mesh">
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Start Your Journey"
          highlight="Today"
          subtitle="Have questions? Fill out the form and we'll reach out to you on WhatsApp instantly."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info - left */}
          <FadeLeft className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-2xl glass p-6 premium-shadow">
                <h3 className="font-display text-lg font-bold mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 group cursor-hover">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call us</p>
                      <p className="text-sm font-semibold">{siteConfig.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group cursor-hover">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email us</p>
                      <p className="text-sm font-semibold">{siteConfig.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Visit us</p>
                      <p className="text-sm font-semibold">Bihar, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Working hours</p>
                      <p className="text-sm font-semibold">Mon-Sat: 8AM - 8PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-6 text-white premium-shadow transition-transform hover:scale-[1.02] cursor-hover"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-8 w-8" />
                  <div>
                    <p className="font-display text-base font-bold">Chat on WhatsApp</p>
                    <p className="text-xs text-white/80">Quick replies, instant support</p>
                  </div>
                </div>
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Responsive Google Map */}
              <div className="overflow-hidden rounded-2xl border border-border premium-shadow h-64 lg:flex-1">
                <iframe
                  title="Location Map"
                  src={googleMapsEmbed}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </FadeLeft>

          {/* Form - right */}
          <FadeRight className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl glass p-6 sm:p-8 premium-shadow"
            >
              <h3 className="font-display text-xl font-bold mb-1">Admission Enquiry Form</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill in your details and we'll connect with you on WhatsApp.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Full Name *</label>
                  <input {...register('name')} placeholder="Enter your full name" className={inputClass} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{String(errors.name.message)}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Phone Number *</label>
                  <input {...register('phone')} placeholder="10-digit mobile number" className={inputClass} />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{String(errors.phone.message)}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Email *</label>
                  <input {...register('email')} type="email" placeholder="you@example.com" className={inputClass} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{String(errors.email.message)}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Class *</label>
                  <select {...register('class')} className={inputClass}>
                    <option value="">Select class</option>
                    {classOptions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.class && <p className="mt-1 text-xs text-destructive">{String(errors.class.message)}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Course *</label>
                  <select {...register('course')} className={inputClass}>
                    <option value="">Select course</option>
                    {courseOptions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.course && <p className="mt-1 text-xs text-destructive">{String(errors.course.message)}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">City *</label>
                  <input {...register('city')} placeholder="Your city" className={inputClass} />
                  {errors.city && <p className="mt-1 text-xs text-destructive">{String(errors.city.message)}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us about your goals or any questions..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{String(errors.message.message)}</p>}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3.5 text-sm font-semibold text-white premium-shadow transition-all hover:shadow-lg hover:shadow-primary/40 disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send via WhatsApp
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40 p-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                        Message sent successfully!
                      </p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400">
                        We've opened WhatsApp with your details. We'll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
