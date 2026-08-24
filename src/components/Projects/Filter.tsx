import { useTranslation } from "react-i18next";

import { Button } from "@src/components/ui/Button";
import FadeIn from "@src/components/ui/animations/FadeIn";

import type { ProjectButton } from "@src/static/data/Projects.data";

interface Props {
  filter: string;
  setFilter: (filter: string) => void;
  items: ProjectButton[];
}

const Filter = ({ filter, setFilter, items }: Props) => {
  const { t } = useTranslation();

  return (
    <FadeIn className="flex flex-row justify-center gap-x-2" as="nav">
      {items.map(({ label, value }) => (
        <Button
          key={label}
          className="px-8"
          variant={filter === value ? "gradient" : "outline"}
          onClick={() => setFilter(value)}
          aria-label={`${t("projects-a11y.filterBy")} ${label}`}
        >
          {t(label)}
        </Button>
      ))}
    </FadeIn>
  );
};

export default Filter;
