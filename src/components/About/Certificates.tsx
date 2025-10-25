import { useState } from "react";
import { tv } from "tailwind-variants";

import SpotlightCard from "../SpotlightCard";
import CertificateInfo from "./CertificateInfo";

import AWS from "@src/assets/aws.png";

const certificatesStyles = tv({
  slots: {
    container: "flex flex-col gap-y-2",
    containerContent: "grid grid-cols-3 gap-4",
    containerItem:
      "flex flex-1 flex-col items-center justify-center h-32  xl:h-44 bg-background rounded-xl cursor-pointer hover:scale-[101%] transition-all duration-300",
    image: "w-24 h-24 xl:w-36 xl:h-36 object-contain",
    title: "text-sm font-semibold",
  },
});

const { container, containerContent, containerItem, image, title } =
  certificatesStyles();

const Certificates = () => {
  const [showCertificateInfo, setShowCertificateInfo] =
    useState<boolean>(false);

  return (
    <div className={container()}>
      <h2 className={title()}>Certificados</h2>
      <div className={containerContent()}>
        <div onClick={() => setShowCertificateInfo(!showCertificateInfo)}>
          <SpotlightCard
            className={containerItem()}
            spotlightColor="rgba(123, 83, 238, 0.2)"
          >
            {!showCertificateInfo ? (
              <img className={image()} src={AWS} alt="AWS" />
            ) : (
              <CertificateInfo />
            )}
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
