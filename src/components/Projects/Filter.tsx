import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

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
        >
          {label}
        </Button>
      ))}
    </motion.nav>
  );
};

export default Filter;
