import { useState } from "react";
import { Separator } from "../ui/separator";
import SpotlightCard from "../SpotlightCard";

import { aboutData } from "@src/static/AboutData";
import AWS from "@src/assets/aws.png";

const About = () => {
  const [showCertificateInfo, setShowCertificateInfo] =
    useState<boolean>(false);

  return (
    <section className="relative grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5">
      <article className="flex flex-col gap-y-2 text-xs text-foreground/75 indent-4">
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      <Separator />

      <article className="flex flex-col gap-y-8 w-full">
        <div className="relative flex flex-row items-center justify-center self-center w-full py-8 bg-gradient-to-r from-primary to-secondary rounded-xl">
          <div className="absolute -top-6 w-12 h-12 bg-background rounded-full" />
          <div className="absolute -bottom-6 w-12 h-12 bg-background rounded-full" />

          <div className="flex flex-1 flex-col items-center justify-center">
            <strong className="text-xl font-extrabold -mb-1">2+</strong>
            <p className="text-[8px] font-normal text-foreground/75 text-center text-nowrap">
              anos de experiência
            </p>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center">
            <strong className="text-xl font-extrabold -mb-1">16+</strong>
            <p className="text-[8px] font-normal text-foreground/75 text-center text-nowrap">
              tecnologias dominadas
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm font-bold">
            Tecnologias e ferramentas mais utilizadas
          </h2>

          <div className="flex flex-row flex-wrap gap-2">
            {aboutData.tools.map((tool, index) => (
              <SpotlightCard
                key={index}
                className="flex flex-row items-center gap-x-2 bg-primary/10 hover:scale-[101%] p-2 rounded-lg transition-all duration-300 cursor-pointer text-xs font-medium"
                spotlightColor="rgba(123, 83, 238, 0.5)"
              >
                <img className="w-4 h-4" src={tool.image} />
                <p>#{tool.name}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm font-bold">Certificados</h2>
          <div className="grid grid-cols-3 gap-4">
            <div onClick={() => setShowCertificateInfo(!showCertificateInfo)}>
              <SpotlightCard
                className="flex flex-1 flex-col items-center justify-center p-4 bg-background rounded-xl cursor-pointer hover:scale-[101%] transition-all duration-300"
                spotlightColor="rgba(123, 83, 238, 0.2)"
              >
                {!showCertificateInfo ? (
                  <img
                    className="w-24 h-24 object-contain"
                    src={AWS}
                    alt="AWS"
                  />
                ) : (
                  <div className="flex flex-col gap-y-2 text-[8px] text-center">
                    <h3 className="text-[10px] font-semibold text-secondary">
                      Certificação AWS CFL-02
                    </h3>

                    <div className="flex flex-col gap-y-1">
                      <p>
                        Adquirida em:{" "}
                        <strong className="font-semibold">09/06/2025</strong>
                      </p>
                      <p>
                        Expira em:{" "}
                        <strong className="font-semibold">09/06/2028</strong>
                      </p>
                    </div>

                    <p>
                      Certificação que recebi durante meu estágio na empresa
                      Compass UOL.
                    </p>
                  </div>
                )}
              </SpotlightCard>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
