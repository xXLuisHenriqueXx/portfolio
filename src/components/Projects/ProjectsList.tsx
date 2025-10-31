import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProjectItem from "./ProjectItem";

import type { IProjectProps } from "@src/common/interfaces/Projects.interface";

const projectsListStyles = tv({
  slots: {
    container: "w-full max-w-sm lg:max-w-2xl 2xl:max-w-5xl",
  },
});

const { container } = projectsListStyles();

interface ProjectsListProps {
  data: IProjectProps[];
  setShowModal: (showModal: boolean) => void;
  setSelectedProject: (project: IProjectProps) => void;
}

const ProjectsList = ({
  data,
  setShowModal,
  setSelectedProject,
}: ProjectsListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      viewport={{ once: true }}
    >
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
    </motion.div>
  );
};

export default ProjectsList;
