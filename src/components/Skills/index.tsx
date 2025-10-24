import { useEffect, useRef } from "react";

import Header from "../Header";
import SkillsList from "./SkillsList";

interface ISkillsProps {
  setActiveScreen: (value: "skills") => void;
}

const Skills = ({ setActiveScreen }: ISkillsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveScreen("skills");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={"skills"}
      className="grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5 bg-gradient-to-b from-card to-[#1B142F]"
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
