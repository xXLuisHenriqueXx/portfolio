import { useTranslation } from "react-i18next";

import SpotlightCard from "@src/components/ui/SpotlightCard";

import type { AboutTool } from "@src/static/data/About.data";

interface Props {
  items: AboutTool[];
}

const Tools = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <h2 className="text-sm font-semibold">{t("about.toolsTitle")}</h2>

      <ul className="flex flex-row flex-wrap gap-1">
        {items.map(({ name, icon: Icon }) => (
          <li key={name}>
            <SpotlightCard className="flex flex-row items-center gap-x-2 px-4 py-2 rounded-xl">
              <Icon
                className="size-6 text-primary"
                variant="mono"
                aria-hidden
              />

              <p className="text-sm"># {name}</p>
            </SpotlightCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
