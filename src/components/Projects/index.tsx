import { useState } from "react";

import Header from "./Header";
import Filter from "./Filter";
import ProjectsList from "./ProjectsList";

import { projectsData } from "@src/static/ProjectsData";

const Projects = () => {
  const [filter, setFilter] = useState<string>("");

  const filteredProjects = projectsData.filter((project) => {
    return project.type.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section className="relative grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5">
      <Header />

      <Filter filter={filter} setFilter={setFilter} />

      <ProjectsList data={filteredProjects} />
    </section>
  );
};

export default Projects;
