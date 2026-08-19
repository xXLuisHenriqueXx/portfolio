import { useTranslation } from "react-i18next";

import FadeIn from "@src/components/ui/animations/FadeIn";
import SkillCard from "./SkillCard";

import type { SkillsData } from "@src/static/data/Skills.data";

interface Props {
  data: SkillsData;
}
const SkillsList = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="flex flex-row items-center gap-x-2">
        <div className="p-2 bg-primary/10 border border-border rounded-lg text-primary">
          <data.icon className="size-4" aria-hidden />
        </div>
        <h2 className="shrink-0 text-sm font-bold uppercase">
          {t(data.title)}
        </h2>
        <span className="w-full h-px bg-linear-to-r from-primary to-transparent" />
      </div>

      <ul className="relative flex flex-row gap-x-2 overflow-x-auto">
        {data.items.map((item, index) => (
          <FadeIn key={item.name} className="flex" as="li" delay={index * 0.1}>
            <SkillCard data={item} />
          </FadeIn>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
