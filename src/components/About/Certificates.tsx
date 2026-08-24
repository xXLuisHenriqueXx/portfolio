import { useTranslation } from "react-i18next";

import SpotlightCard from "@src/components/ui/SpotlightCard";

import type { AboutCertificate } from "@src/static/data/About.data";

interface Props {
  items: AboutCertificate[];
}

const Certificates = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-sm font-semibold">{t("about.certificates.title")}</h2>

      <ul className="grid grid-cols-3 gap-2">
        {items.map(({ image, name, duration, description }) => (
          <SpotlightCard className="group relative flex flex-1 flex-col items-center justify-center aspect-square">
            <img
              className="absolute inset-0 w-[90%] h-[90%] m-auto object-cover -z-1"
              src={image}
              alt={name}
              loading="lazy"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-background/90 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <h3 className="text-xs md:text-sm font-bold text-secondary">
                {t(name)}
              </h3>
              <p className="text-[10px] md:text-xs text-nowrap">{duration}</p>
              <p className="text-[10px] md:text-xs">{t(description)}</p>
            </div>
          </SpotlightCard>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
