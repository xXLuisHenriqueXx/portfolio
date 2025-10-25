import { tv } from "tailwind-variants";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProjectItem from "./ProjectItem";

const projectsListStyles = tv({
  slots: {
    container: "w-full max-w-sm lg:max-w-2xl 2xl:max-w-5xl",
  },
});

const { container } = projectsListStyles();

interface ProjectsListProps {
  data: any[];
  setShowModal: (showModal: boolean) => void;
  setSelectedProject: (project: any) => void;
}

const ProjectsList = ({
  data,
  setShowModal,
  setSelectedProject,
}: ProjectsListProps) => {
  return (
    <Carousel
      className={container()}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {data.map((item) => (
          <ProjectItem
            key={item.id}
            data={item}
            setShowModal={setShowModal}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsList;
