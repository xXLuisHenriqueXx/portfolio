import SpotlightCard from "../SpotlightCard";

import { aboutData } from "@src/static/AboutData";

const Tools = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-sm font-bold">
        Tecnologias e ferramentas mais utilizadas
      </h2>

      <div className="flex flex-row flex-wrap gap-2">
        {aboutData.tools.map((tool, index) => (
          <SpotlightCard
            key={index}
            className="flex flex-row items-center gap-x-2 bg-primary/10 hover:scale-[101%] p-2 rounded-lg transition-all duration-300 cursor-pointer text-xs font-medium"
            spotlightColor="rgba(123, 83, 238, 0.5)"
          >
            <tool.icon className="w-4 h-4 fill-primary" />
            <p>#{tool.name}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
