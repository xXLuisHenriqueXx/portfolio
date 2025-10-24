import { Button } from "../ui/button";
import { CarouselItem } from "../ui/carousel";
import SpotlightCard from "../SpotlightCard";

interface ProjectItemProps {
  data: any;
  setShowModal: (showModal: boolean) => void;
  setSelectedProject: (project: any) => void;
}
const ProjectItem = ({
  data,
  setShowModal,
  setSelectedProject,
}: ProjectItemProps) => {
  return (
    <CarouselItem
      className="lg:basis-1/2 2xl:basis-1/3"
      onClick={() => {
        setShowModal(true);
        setSelectedProject(data);
      }}
    >
      <SpotlightCard
        className="relative bg-card rounded-xl hover:scale-[99%] transition-all cursor-pointer"
        spotlightColor="rgba(123, 83, 238, 0.25)"
      >
        <data.tag />

        <div className="relative w-full h-72 rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-secondary/75 rounded-xl" />
          <div className="absolute inset-0 flex flex-row items-center justify-center gap-x-2">
            {data.technologies.map((technology: any, index: any) => (
              <technology.icon
                key={index}
                className="w-8 h-8 text-foreground"
              />
            ))}
          </div>
          <img
            className="w-full h-full object-cover rounded-xl"
            src={data.image}
          />
        </div>

        <div className="flex flex-col gap-y-4 w-full p-4">
          <div className="flex flex-col gap-y-2 items-center">
            <h2 className="text-base font-semibold">{data.title}</h2>
            <p className="text-[10px] xl:text-xs font-medium text-foreground/75">
              {data.createDate}
            </p>
          </div>

          <Button variant={"gradient"}>Detalhes</Button>
        </div>
      </SpotlightCard>
    </CarouselItem>
  );
};

export default ProjectItem;
