import type { Variants } from "framer-motion";

// Snappy spring-like easing — feels physical, not floaty
const EASE = [0.22, 0.61, 0.36, 1] as [number, number, number, number];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 14 },          // was y:30 → less layout thrash
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,                      // was 0.6 → 47% faster
      delay: i * 0.06,                     // was 0.1 → tighter stagger
      ease: EASE,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.28,                      // was 0.5
      delay: i * 0.06,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },    // was 0.9 → less jarring
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.28,                      // was 0.5
      delay: i * 0.06,
      ease: EASE,
    },
  }),
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },         // was -40
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: EASE },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },          // was 40
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,              // was 0.1 → tighter
      delayChildren: 0.04,               // was 0.1 → starts sooner
    },
  },
};
