import SpotlightCard from "../SpotlightCard";
import { Separator } from "../ui/separator";

import { skillsData } from "@src/static/SkillsData";

const Skills = () => {
  return (
    <section className="relative grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5 bg-gradient-to-b from-card to-[#1B142F]">
      <article className="flex flex-col items-center gap-y-1">
        <h1 className="text-3xl font-extrabold text-center">
          MINHAS HABILIDADES
        </h1>
        <div className="w-1/2 h-1 bg-gradient-to-r from-primary to-secondary" />
      </article>

      <p className="text-xs text-foreground/75 text-center">
        Abaixo você pode visualizar com maior nível de detalhe as tecnologias e
        ferramentas que possuo conhecimento.
      </p>

      <article className="flex flex-col gap-y-4 max-w-full">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-row gap-x-4 w-full p-4 bg-background rounded-xl"
          >
            <div className="flex shrink-0 flex-col items-center justify-center gap-y-1 w-16">
              <skill.icon className="w-6 h-6 text-foreground/75 p-1 bg-primary rounded-md" />
              <h2 className="text-[8px] font-semibold text-center">
                {skill.title}
              </h2>
            </div>

            <Separator orientation="vertical" />

            <div
              className="flex flex-row gap-x-2 overflow-x-auto"
              style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              {skill.items.map((item, index) => (
                <SpotlightCard
                  key={index}
                  className="flex shrink-0 flex-col items-center justify-center gap-y-2 p-2 bg-card rounded-md"
                  spotlightColor="rgba(123, 83, 238, 0.25)"
                >
                  <div className="flex flex-col items-center gap-y-1">
                    <img className="w-6 h-6" src={item.image} />
                    <p className="text-[8px] font-semibold">{item.name}</p>
                  </div>

                  <item.tag />
                </SpotlightCard>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Skills;
