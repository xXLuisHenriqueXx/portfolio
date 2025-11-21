import { useState } from "react";
import { tv } from "tailwind-variants";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SpotlightCard from "../SpotlightCard";
import CertificateInfo from "./CertificateInfo";

import { aboutData } from "@src/static/AboutData";

const certificatesStyles = tv({
  slots: {
    container: "flex flex-col gap-y-2",
    containerContent: "grid grid-cols-3 gap-4",
    containerItem:
      "relative flex flex-1 flex-col items-center justify-center h-32  xl:h-44 bg-background rounded-xl cursor-pointer hover:scale-[101%] transition-all duration-300",
    containerAnimation:
      "absolute inset-0 flex items-center justify-center backface-hidden",
    imageCertificate: "w-24 h-24 xl:w-36 xl:h-36 object-contain",
    title: "text-sm font-semibold",
  },
});

const {
  container,
  containerContent,
  containerItem,
  containerAnimation,
  imageCertificate,
  title,
} = certificatesStyles();

const Certificates = () => {
  const { t } = useTranslation();

  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setSelectedCertificate((prev) => (prev === index ? null : index));
  };

  return (
    <div className={container()}>
      <h2 className={title()}>{t("about.certificates.title")}</h2>
      <div className={containerContent()}>
        {aboutData.certificates.map(
          ({ image, name, duration, description }, index) => {
            const isSelected = selectedCertificate === index;

            return (
              <div key={name} onClick={() => handleClick(index)}>
                <SpotlightCard
                  className={containerItem()}
                  spotlightColor="rgba(123, 83, 238, 0.2)"
                >
                  <AnimatePresence mode="wait">
                    <motion.button
                      key={!isSelected ? "back" : "front"}
                      className={containerAnimation()}
                      initial={{ rotateY: isSelected ? 180 : 0, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -180, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "linear" }}
                      role="button"
                    >
                      {!isSelected ? (
                        <img
                          className={imageCertificate()}
                          src={image}
                          alt={name}
                          loading="lazy"
                        />
                      ) : (
                        <CertificateInfo
                          name={t(name)}
                          duration={duration}
                          description={t(description)}
                        />
                      )}
                    </motion.button>
                  </AnimatePresence>
                </SpotlightCard>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Certificates;
