import { Button } from "../ui/button";

interface IFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filter = ({ filter, setFilter }: IFilterProps) => {
  return (
    <nav className="flex flex-row gap-x-2">
      {[
        { label: "Todos", value: "" },
        { label: "Web", value: "web" },
        { label: "Mobile", value: "mobile" },
      ].map((item) => (
        <Button
          key={item.label}
          variant={filter === item.value ? "gradient" : "outline"}
          className="text-xs lg:text-sm 2xl:text-base"
          onClick={() => setFilter(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
};

export default Filter;
