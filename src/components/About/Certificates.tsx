import { useState } from "react";

import SpotlightCard from "../SpotlightCard";

import AWS from "@src/assets/aws.png";

const CertificateInfo = () => {
  return (
    <div className="flex flex-col items-center gap-y-2 lg:gap-y-4 text-[8px] lg:text-[10px] 2xl:text-xs text-center">
      <h3 className="text-[10px] lg:text-sm 2xl:text-base font-semibold text-secondary">
        Certificação AWS CFL-02
      </h3>

      <div className="flex flex-col gap-y-1">
        <p>
          Adquirida em: <strong className="font-semibold">09/06/2025</strong>
        </p>
        <p>
          Expira em: <strong className="font-semibold">09/06/2028</strong>
        </p>
      </div>

      <p className="w-[80%]">
        Certificação que recebi durante meu estágio na empresa Compass UOL.
      </p>
    </div>
  );
};

const Certificates = () => {
  const [showCertificateInfo, setShowCertificateInfo] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-sm font-semibold">Certificados</h2>
      <div className="grid grid-cols-3 gap-4">
        <div onClick={() => setShowCertificateInfo(!showCertificateInfo)}>
          <SpotlightCard
            className="flex flex-1 flex-col items-center justify-center h-32  xl:h-44 bg-background rounded-xl cursor-pointer hover:scale-[101%] transition-all duration-300"
            spotlightColor="rgba(123, 83, 238, 0.2)"
          >
            {!showCertificateInfo ? (
              <img
                className="w-24 h-24 xl:w-36 xl:h-36 object-contain"
                src={AWS}
                alt="AWS"
              />
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
