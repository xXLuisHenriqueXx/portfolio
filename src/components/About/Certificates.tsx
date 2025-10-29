import { useState } from "react";
import { tv } from "tailwind-variants";

import SpotlightCard from "../SpotlightCard";
import CertificateInfo from "./CertificateInfo";

import { aboutData } from "@src/static/AboutData";

const certificatesStyles = tv({
  slots: {
    container: "flex flex-col gap-y-2",
    containerContent: "grid grid-cols-3 gap-4",
    containerItem:
      "flex flex-1 flex-col items-center justify-center h-32  xl:h-44 bg-background rounded-xl cursor-pointer hover:scale-[101%] transition-all duration-300",
    imageCertificate: "w-24 h-24 xl:w-36 xl:h-36 object-contain",
    title: "text-sm font-semibold",
  },
});

const { container, containerContent, containerItem, imageCertificate, title } =
  certificatesStyles();

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setSelectedCertificate((prev) => (prev === index ? null : index));
  };

  return (
    <div className={container()}>
      <h2 className={title()}>Certificados</h2>
      <div className={containerContent()}>
        {aboutData.certificates.map(
          ({ image, name, duration, description }, index) => {
            const isSelected = selectedCertificate === index;

            return (
              <div onClick={() => handleClick(index)}>
                <SpotlightCard
                  className={containerItem()}
                  spotlightColor="rgba(123, 83, 238, 0.2)"
                >
                  {!isSelected ? (
                    <img className={imageCertificate()} src={image} alt="AWS" />
                  ) : (
                    <CertificateInfo
                      name={name}
                      duration={duration}
                      description={description}
                    />
                  )}
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
