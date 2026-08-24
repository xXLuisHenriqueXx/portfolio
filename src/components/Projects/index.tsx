import { useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "@src/components/ui/Header";
import Filter from "./Filter";
import ProjectsList from "./ProjectsList";
import Modal from "./Modal";

import { PROJECTS_DATA } from "@src/static/data/Projects.data";

const Projects = () => {
  const { t } = useTranslation();
  const { projects, buttons } = PROJECTS_DATA;

  const [filter, setFilter] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<any>();

  const filteredProjects = projects.filter((project) => {
    return project.type.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section
      id={"projects"}
      className="relative flex flex-col justify-center self-center gap-y-8 w-full max-w-5xl py-20 px-6"
      aria-label={t("projects-a11y.section")}
    >
      <Header
        title={t("projects.header.title")}
        description={t("projects.header.description")}
      />

      <Filter filter={filter} setFilter={setFilter} items={buttons} />

      <ProjectsList
        data={filteredProjects}
        setShowModal={setShowModal}
        setSelectedProject={setSelectedProject}
      />

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        data={selectedProject}
      />
    </section>
  );
};

export default Projects;
