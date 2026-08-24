import SpotlightCard from "@src/components/ui/SpotlightCard";

import type { SkillItem } from "@src/static/data/Skills.data";

interface Props {
  data: SkillItem;
}

const SkillCard = ({ data }: Props) => {
  return (
    <SpotlightCard className="flex flex-col items-center justify-center gap-y-4 w-36 p-4 hover:scale-100">
      <div className="flex flex-col items-center gap-y-2">
        <data.icon
          className="size-10 text-primary"
          variant="mono"
          aria-hidden
        />

        <p className="text-xs font-semibold">{data.name}</p>
      </div>

      <data.tag />
    </SpotlightCard>
  );
};

export default SkillCard;
