import { useEffect, useRef, useState } from "react";
import { tv } from "tailwind-variants";

import Header from "../Header";
import Filter from "./Filter";
import ProjectsList from "./ProjectsList";
import Modal from "../Modal";

import { projectsData } from "@src/static/ProjectsData";

const projectsStyles = tv({
  slots: {
    container:
      "relative grid grid-cols-1 place-items-center gap-y-8 w-full py-12 px-5",
  },
});

const { container } = projectsStyles();

interface IProjectsProps {
  setActiveScreen: (value: "projects") => void;
}

const Projects = ({ setActiveScreen }: IProjectsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [filter, setFilter] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<any>();

  const filteredProjects = projectsData.filter((project) => {
    return project.type.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveScreen("projects");
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
    <section ref={ref} id={"projects"} className={container()}>
      <Header
        title="MEUS PROJETOS"
        description="Abaixo você pode visualizar a comprovação das minhas habilidades
        descritas acima, por meio de projetos em que trabalhei."
      />

      <Filter filter={filter} setFilter={setFilter} />

      <ProjectsList
        data={filteredProjects}
        setShowModal={setShowModal}
        setSelectedProject={setSelectedProject}
      />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        data={selectedProject}
      />
    </section>
  );
};

export default Projects;
