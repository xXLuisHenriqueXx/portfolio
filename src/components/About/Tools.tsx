import SpotlightCard from "../SpotlightCard";

import { aboutData } from "@src/static/AboutData";

const Tools = () => {
  return (
    <div className="flex flex-col gap-y-2 w-full max-w-3xl">
      <h2 className="text-sm font-semibold">
        Tecnologias e ferramentas mais utilizadas
      </h2>

      <div className="flex flex-row flex-wrap gap-2">
        {aboutData.tools.map(({ name, icon: Icon }) => (
          <SpotlightCard
            key={name}
            className="flex flex-row items-center gap-x-2 bg-primary/10 hover:scale-[102.5%] p-2 rounded-lg transition-all duration-300 cursor-pointer text-xs font-medium"
            spotlightColor="rgba(123, 83, 238, 0.5)"
          >
            <Icon className="w-4 h-4 xl:w-6 xl:h-6 fill-primary" />

            <p className="xl:text-sm">#{name}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
