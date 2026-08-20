import { useTranslation } from "react-i18next";
import { SaveOff } from "lucide-react";

import { Button } from "@src/components/ui/Button";
import SpotlightCard from "@src/components/ui/SpotlightCard";

import type { ProjectItem } from "@src/static/data/Projects.data";

interface Props {
  data: ProjectItem;
  setShowModal: (showModal: boolean) => void;
  setSelectedProject: (project: ProjectItem) => void;
}

const ProjectCard = ({ data, setShowModal, setSelectedProject }: Props) => {
  const { t } = useTranslation();

  return (
    <li
      className="flex shrink-0 w-full max-w-md"
      onClick={() => {
        setShowModal(true);
        setSelectedProject(data);
      }}
    >
      <SpotlightCard className="relative w-full rounded-4xl hover:scale-99 cursor-pointer">
        <data.tag />

        <div className="relative h-72 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-background/50 to-secondary/75 rounded-3xl"></div>

          <div className="absolute inset-0 flex flex-row items-center justify-center gap-x-2">
            {data.technologies.map((technology, index) => (
              <technology.icon
                key={index}
                className="size-8 text-foreground"
                variant="mono"
                aria-hidden
              />
            ))}
          </div>

          {data.image ? (
            <img
              className="absolute inset-0 w-full h-full object-cover -z-1"
              src={data.image}
              alt={`${t("projects-a11y.imageAlt")} ${data.title}`}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-primary -z-1 opacity-50">
              <SaveOff className="size-32" aria-hidden />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-y-4 w-full p-4 text-center">
          <div>
            <h2 className="font-semibold">{data.title}</h2>
            <p className="text-xs text-foreground/75">{data.createDate}</p>
          </div>

          <Button className="w-full">{t("projects.details")}</Button>
        </div>
      </SpotlightCard>
    </li>
  );
};

export default ProjectCard;
