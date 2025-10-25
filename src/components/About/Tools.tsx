import { tv } from "tailwind-variants";

import SpotlightCard from "../SpotlightCard";

import { aboutData } from "@src/static/AboutData";

const toolsStyles = tv({
  slots: {
    container: "flex flex-col gap-y-2 w-full max-w-3xl",
    containerContent: "flex flex-row flex-wrap gap-2",
    containerItem:
      "flex flex-row items-center gap-x-2 bg-primary/10 hover:scale-[102.5%] p-2 rounded-lg transition-all duration-300 cursor-pointer text-xs font-medium",
    title: "text-sm font-semibold",
    icon: "w-4 h-4 xl:w-6 xl:h-6 text-primary",
    text: "xl:text-sm",
  },
});

const { container, containerContent, containerItem, title, icon, text } =
  toolsStyles();

const Tools = () => {
  return (
    <div className={container()}>
      <h2 className={title()}>Tecnologias e ferramentas mais utilizadas</h2>

      <div className={containerContent()}>
        {aboutData.tools.map(({ name, icon: Icon }) => (
          <SpotlightCard
            key={name}
            className={containerItem()}
            spotlightColor="rgba(123, 83, 238, 0.5)"
          >
            <Icon className={icon()} />

            <p className={text()}># {name}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
