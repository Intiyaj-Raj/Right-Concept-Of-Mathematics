"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/* ===== Magnetic Button ===== */
export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  ...props
}: any) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn("ripple-btn", className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/* ===== Ripple Button ===== */
export function RippleButton({
  children,
  className = "",
  onClick,
  ...props
}: any) {
  const ref = useRef(null);

  function handleClick(e) {
    if (!ref.current) return;
    const button = ref.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    if (onClick) onClick(e);
  }

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn("ripple-btn", className)}
      {...props}
    >
      {children}
    </button>
  );
}

/* ===== 3D Tilt Card ===== */
export function TiltCard({ children, className = "", max = 12 }: any) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * max);
    rotateX.set(-py * max);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ===== Custom Cursor ===== */
export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    let mouseX = 0,
      mouseY = 0;
    let outlineX = 0,
      outlineY = 0;

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    }

    function loop() {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;
      }
      requestAnimationFrame(loop);
    }

    function onEnterInteractive() {
      if (outlineRef.current) {
        outlineRef.current.style.width = "60px";
        outlineRef.current.style.height = "60px";
        outlineRef.current.style.borderColor = "hsl(var(--secondary) / 0.8)";
      }
    }
    function onLeaveInteractive() {
      if (outlineRef.current) {
        outlineRef.current.style.width = "40px";
        outlineRef.current.style.height = "40px";
        outlineRef.current.style.borderColor = "hsl(var(--primary) / 0.5)";
      }
    }

    window.addEventListener("mousemove", onMove);
    const interactive = document.querySelectorAll("a, button, .cursor-hover");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    const raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}

/* ===== Theme Toggle ===== */
// export function ThemeToggle({ className = "" }) {
//   const [theme, setTheme] = useState("light");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     setTheme(
//       document.documentElement.classList.contains("dark") ? "dark" : "light",
//     );
//   }, []);

//   function toggle() {
//     const next = theme === "dark" ? "aurora" : "dark";
//     setTheme(next);
//     document.documentElement.classList.toggle("dark", next === "dark");
//   }

//   if (!mounted) return <div className={cn("h-10 w-10", className)} />;
//   return (
//     <button
//       onClick={toggle}
//       aria-label="Toggle theme"
//       className={cn(
//         "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur transition-all hover:bg-accent/20 hover:scale-110 cursor-hover",
//         className,
//       )}
//     >
//       {theme === "dark" ? (
//         <svg
//           className="h-5 w-5 text-amber-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <circle cx="12" cy="12" r="5" />
//           <path
//             strokeLinecap="round"
//             d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
//           />
//         </svg>
//       ) : (
//         <svg
//           className="h-5 w-5 text-primary"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
//           />
//         </svg>
//       )}
//     </button>
//   );
// }
