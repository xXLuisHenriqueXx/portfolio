import { useEffect, useState } from "react";

export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
] as const;
export type TActiveScreen = (typeof SECTION_IDS)[number];

export const useActiveSection = <T extends string>(
  sectionIds: readonly T[],
) => {
  const [activeSection, setActiveSection] = useState<T>(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        const activeSection = visibleSections[0];

        if (activeSection) {
          setActiveSection(activeSection.target.id as T);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
