import FadeIn from "@src/components/ui/animations/FadeIn";
import ProjectCard from "./ProjectCard";

import type { ProjectItem } from "@src/static/data/Projects.data";

interface Props {
  data: ProjectItem[];
  setShowModal: (showModal: boolean) => void;
  setSelectedProject: (project: ProjectItem) => void;
}

const ProjectsList = ({ data, setShowModal, setSelectedProject }: Props) => {
  return (
    <FadeIn className="w-full">
      <ul className="flex flex-row items-center gap-x-2 w-full overflow-x-auto">
        {data.map((item) => (
          <ProjectCard
            key={item.title}
            data={item}
            setShowModal={setShowModal}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </ul>
    </FadeIn>
  );
};

export default ProjectsList;
