import { useState } from "react";
import SpotlightCard from "../SpotlightCard";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { projectsData } from "@src/static/ProjectsData";

const Projects = () => {
  const [filter, setFilter] = useState<string>("");

  const filteredProjects = projectsData.filter((project) => {
    return project.type.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section className="relative grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5">
      <article className="flex flex-col items-center gap-y-1">
        <h1 className="text-3xl font-extrabold text-center">MEUS PROJETOS</h1>
        <div className="w-1/2 h-1 bg-gradient-to-r from-primary to-secondary" />
      </article>

      <p className="text-xs text-foreground/75 text-center">
        Abaixo você pode visualizar a comprovação das minhas habilidades
        descritas acima, por meio de projetos em que trabalhei.
      </p>

      <nav className="flex flex-row gap-x-2">
        {[
          { label: "Todos", value: "" },
          { label: "Web", value: "web" },
          { label: "Mobile", value: "mobile" },
        ].map((item) => (
          <Button
            key={item.label}
            variant={filter === item.value ? "gradient" : "outline"}
            className="text-xs"
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </nav>

      <Carousel
        className="w-full max-w-sm"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {filteredProjects.map((project) => (
            <CarouselItem>
              <SpotlightCard
                className="relative bg-card rounded-xl hover:scale-[99%] transition-all cursor-pointer"
                spotlightColor="rgba(123, 83, 238, 0.25)"
              >
                <project.tag />

                <div className="relative w-full h-72 rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-secondary/75 rounded-xl" />
                  <div className="absolute inset-0 flex flex-row items-center justify-center gap-x-2">
                    {project.technologies.map((technology, index) => (
                      <technology.icon
                        key={index}
                        className="w-8 h-8 text-foreground"
                      />
                    ))}
                  </div>
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={project.image}
                  />
                </div>

                <div className="flex flex-col gap-y-4 w-full p-4">
                  <div className="flex flex-col gap-y-2 items-center">
                    <h2 className="text-base font-semibold">{project.title}</h2>
                    <p className="text-[10px] font-medium text-foreground/75">
                      {project.createDate}
                    </p>
                  </div>

                  <Button variant={"gradient"}>Detalhes</Button>
                </div>
              </SpotlightCard>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projects;
