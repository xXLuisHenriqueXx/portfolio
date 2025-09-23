import SpotlightCard from "../SpotlightCard";
import { Separator } from "../ui/separator";

interface SkillItemProps {
  data: any;
  index: number;
}
const SkillItem = ({ data, index }: SkillItemProps) => {
  return (
    <div
      key={index}
      className="flex flex-row gap-x-4 w-full p-4 bg-background rounded-xl"
    >
      <div className="flex shrink-0 flex-col items-center justify-center gap-y-1 w-16">
        <data.icon className="w-6 h-6 text-foreground/75 p-1 bg-primary rounded-md" />
        <h2 className="text-[8px] font-semibold text-center">{data.title}</h2>
      </div>

      <Separator orientation="vertical" />

      <div
        className="flex flex-row gap-x-2 overflow-x-auto"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        {data.items.map((item: any, index: any) => (
          <SpotlightCard
            key={index}
            className="flex shrink-0 flex-col items-center justify-center gap-y-2 p-2 bg-card rounded-md"
            spotlightColor="rgba(123, 83, 238, 0.25)"
          >
            <div className="flex flex-col items-center gap-y-1">
              <item.icon className="w-6 h-6 fill-foreground" />
              <p className="text-[8px] font-semibold">{item.name}</p>
            </div>

            <item.tag />
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
