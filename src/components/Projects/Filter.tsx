import { tv } from "tailwind-variants";

import { Button } from "../ui/button";

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
    <nav className={container()}>
      {[
        { label: "Todos", value: "" },
        { label: "Web", value: "web" },
        { label: "Mobile", value: "mobile" },
      ].map((item) => (
        <Button
          key={item.label}
          variant={filter === item.value ? "gradient" : "outline"}
          className={button()}
          onClick={() => setFilter(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
};

export default Filter;
