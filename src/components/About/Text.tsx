import { useTranslation } from "react-i18next";

interface Props {
  items: string[];
}

const Text = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-1 flex-col gap-y-2">
      {items.map((item, index) => (
        <p key={index} className="text-sm md:text-base indent-8">
          {t(item)}
        </p>
      ))}
    </ul>
  );
};

export default Text;
