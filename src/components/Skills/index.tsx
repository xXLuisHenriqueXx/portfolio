import { useEffect, useRef } from "react";
import { tv } from "tailwind-variants";

import Header from "../Header";
import SkillsList from "./SkillsList";

const skillsStyles = tv({
  slots: {
    container:
      "grid grid-cols-1 place-items-center gap-y-8 w-full py-12 px-5 bg-gradient-to-b from-card to-[#1B142F]",
  },
});

const { container } = skillsStyles();

interface ISkillsProps {
  setActiveScreen: (value: "skills") => void;
}

const Skills = ({ setActiveScreen }: ISkillsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("skills");
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={"skills"}
      className={container()}
      aria-label="Skills section"
    >
      <Header
        title="MINHAS HABILIDADES"
        description="Abaixo você pode visualizar com maior nível de detalhe as tecnologias e
        ferramentas que possuo conhecimento."
      />

      <SkillsList />
    </section>
  );
};

export default Skills;
