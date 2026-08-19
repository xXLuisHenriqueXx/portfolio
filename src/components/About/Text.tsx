import { useTranslation } from "react-i18next";

import SlideIn from "@src/components/ui/animations/SlideIn";
import FadeIn from "@src/components/ui/animations/FadeIn";

interface Props {
  items: string[];
}

const Text = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <SlideIn className="flex flex-1" direction="left">
      <FadeIn className="flex flex-1 flex-col gap-y-2">
        {items.map((item, index) => (
          <p key={index} className="text-sm md:text-base indent-8">
            {t(item)}
          </p>
        ))}
      </FadeIn>
    </SlideIn>
  );
};

export default Text;
