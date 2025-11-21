import { useEffect, useRef, useState } from "react";
import { tv } from "tailwind-variants";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement | null>(null);

  const [filter, setFilter] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<any>();

  const filteredProjects = projectsData.projects.filter((project) => {
    return project.type.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("projects");
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={"projects"}
      className={container()}
      aria-label={t("projects-a11y.section")}
    >
      <Header
        title={t("projects.header.title")}
        description={t("projects.header.description")}
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
