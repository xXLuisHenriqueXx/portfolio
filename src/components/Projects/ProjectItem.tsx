import { tv } from "tailwind-variants";

import { Button } from "../ui/button";
import { CarouselItem } from "../ui/carousel";
import SpotlightCard from "../SpotlightCard";

import type { IProjectProps } from "@src/common/interfaces/Projects.interface";

const projectItemStyles = tv({
  slots: {
    container: "lg:basis-1/2 2xl:basis-1/3",
    containerItem:
      "relative bg-card rounded-xl hover:scale-[99%] transition-all cursor-pointer",
    containerImageIcons: "relative w-full h-72 rounded-xl",
    containerGradient:
      "absolute inset-0 bg-gradient-to-b from-background/50 to-secondary/75 rounded-xl",
    containerIcons:
      "absolute inset-0 flex flex-row items-center justify-center gap-x-2",
    containerTextButton: "flex flex-col gap-y-4 w-full p-4",
    containerText: "flex flex-col gap-y-2 items-center",
    image: "w-full h-full object-cover rounded-xl",
    icon: "w-8 h-8 text-foreground",
    title: "text-base font-semibold",
    create: "text-[10px] xl:text-xs font-medium text-foreground/75",
  },
});

const {
  container,
  containerItem,
  containerImageIcons,
  containerGradient,
  containerIcons,
  containerTextButton,
  containerText,
  image,
  icon,
  title,
  create,
} = projectItemStyles();

interface ProjectItemProps {
  data: IProjectProps;
  setShowModal: (showModal: boolean) => void;
  setSelectedProject: (project: IProjectProps) => void;
}

const ProjectItem = ({
  data,
  setShowModal,
  setSelectedProject,
}: ProjectItemProps) => {
  return (
    <CarouselItem
      className={container()}
      onClick={() => {
        setShowModal(true);
        setSelectedProject(data);
      }}
    >
      <SpotlightCard
        className={containerItem()}
        spotlightColor="rgba(123, 83, 238, 0.25)"
      >
        <data.tag />

        <div className={containerImageIcons()}>
          <div className={containerGradient()} />
          <div className={containerIcons()}>
            {data.technologies.map((technology, index) => (
              <technology.icon key={index} className={icon()} aria-hidden />
            ))}
          </div>
          <img className={image()} src={data.image} loading="lazy" />
        </div>

        <div className={containerTextButton()}>
          <div className={containerText()}>
            <h2 className={title()}>{data.title}</h2>
            <p className={create()}>{data.createDate}</p>
          </div>

          <Button variant={"gradient"} aria-label="Project details">
            Detalhes
          </Button>
        </div>
      </SpotlightCard>
    </CarouselItem>
  );
};

export default ProjectItem;
