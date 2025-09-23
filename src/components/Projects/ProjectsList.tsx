import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProjectItem from "./ProjectItem";

interface ProjectsListProps {
  data: any[];
}

const ProjectsList = ({ data }: ProjectsListProps) => {
  return (
    <Carousel
      className="w-full max-w-sm"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {data.map((item) => (
          <ProjectItem key={item.id} data={item} />
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsList;
