/** Metric values are language-neutral; labels come from i18n. */
export const caseStudyStats = [
  { value: "40%", key: "s1" as const },
  { value: "340%", key: "s2" as const },
  { value: "2–4 wks", key: "s3" as const },
  { value: "150+", key: "s4" as const },
];

export const caseStudyMetrics = {
  c1: ["40%", "< 2 min", "78%", "4.8/5"],
  c2: ["3×", "−60%", "4 min", "+€120K"],
  c3: ["80%", "24/7", "−18%", "€8K/mo"],
  c4: ["500+", "1", "70%", "3×"],
} as const;
