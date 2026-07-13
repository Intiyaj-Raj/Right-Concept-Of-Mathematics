"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let val = 0;
    const interval = setInterval(() => {
      val += Math.random() * 18 + 6;
      if (val >= 100) {
        val = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 400);
      }
      setProgress(Math.floor(val));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Animated math symbol */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex h-24 w-24 items-center justify-center premium-shadow"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Image
                src="/images/right-concept-of-mathematics-logo.png" // apne logo ka path
                alt="Right Concept of Mathematics Logo"
                width={70}
                height={70}
                priority
                className="object-contain"
              />
            </motion.div>

            <motion.div
              className="absolute -inset-3 rounded-3xl border-2 border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.h1
            className="font-display text-xl font-bold text-center px-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Right Concept of <span className="text-gradient">Mathematics</span>
          </motion.h1>

          {/* Progress bar */}
          <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-brand-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs font-medium text-muted-foreground tabular-nums">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
