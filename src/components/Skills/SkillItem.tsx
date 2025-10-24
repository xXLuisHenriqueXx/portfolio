import SpotlightCard from "../SpotlightCard";

interface SkillItemProps {
  data: any;
  index: number;
}
const SkillItem = ({ data, index }: SkillItemProps) => {
  return (
    <div
      key={index}
      className="flex flex-col gap-y-2 lg:gap-y-4 w-full max-w-4xl"
    >
      <div className="flex flex-row items-center gap-x-2">
        <div className="p-2 border border-primary rounded-md">
          <data.icon className="w-3 h-3 lg:w-6 lg:h-6 text-foreground/75" />
        </div>

        <h2 className="text-[10px] xl:text-xs 2xl:text-sm font-semibold text-nowrap">
          {data.title}
        </h2>

        <span className="w-full h-[1px] bg-primary" />
      </div>

      <div className="relative flex flex-row gap-x-2 overflow-x-auto">
        {data.items.map((item: any) => (
          <SpotlightCard
            key={item.name}
            className="flex shrink-0 flex-col items-center justify-center gap-y-2 lg:gap-y-4 p-2 lg:p-4 bg-card rounded-md"
            spotlightColor="rgba(123, 83, 238, 0.25)"
          >
            <div className="flex flex-col items-center gap-y-1 lg:gap-y-2">
              <item.icon className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" />
              <p className="text-[8px] lg:text-[10px] 2xl:text-xs font-semibold">
                {item.name}
              </p>
            </div>

            <item.tag />
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
