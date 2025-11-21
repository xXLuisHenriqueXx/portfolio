import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Button } from "../ui/button";

import { projectsData } from "@src/static/ProjectsData";

const filterStyles = tv({
  slots: {
    container: "flex flex-row gap-x-2",
    button: "text-xs lg:text-sm 2xl:text-base",
  },
});

const { container, button } = filterStyles();

interface IFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filter = ({ filter, setFilter }: IFilterProps) => {
  const { t } = useTranslation();

  return (
    <motion.nav
      className={container()}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
    >
      {projectsData.buttons.map(({ label, value }) => (
        <Button
          key={label}
          variant={filter === value ? "gradient" : "outline"}
          className={button()}
          onClick={() => setFilter(value)}
          aria-label={`${t("projects-a11y.filterBy")} ${label}`}
        >
          {t(label)}
        </Button>
      ))}
    </motion.nav>
  );
};

export default Filter;
