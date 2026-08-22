import { useRef } from "react";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Globe, ImageOff } from "lucide-react";
import { Github } from "@thesvg/react";

import { Button } from "@src/components/ui/Button";
import SpotlightCard from "@src/components/ui/SpotlightCard";
import ScaleIn from "@src/components/ui/animations/ScaleIn";

import type { ProjectItem } from "@src/static/data/Projects.data";
import useDismiss from "@src/hooks/useDismiss";

interface Props {
  open: boolean;
  onClose: () => void;
  data: ProjectItem;
}

const Modal = ({ open, onClose, data }: Props) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);
  useDismiss({ ref, enabled: open, onDismiss: onClose });

  return (
    <AnimatePresence>
      {open && (
        <div
          ref={ref}
          className="fixed inset-0 z-50 flex items-center justify-center w-full min-h-dvh px-6 bg-black/75 backdrop-blur-xs outline-hidden"
        >
          <ScaleIn className="relative z-60 flex flex-col gap-y-4 w-full max-w-xl p-4 bg-card rounded-4xl border border-border overflow-hidden">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              {data.image ? (
                <img
                  className="w-full h-full object-cover"
                  src={data.image}
                  alt={`${t("projects-a11y.imageAlt")} ${data.title}`}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-primary">
                  <ImageOff className="size-32" aria-hidden />
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-y-1">
              <h1 className="text-xl font-extrabold text-center">
                {data.title}
              </h1>
              <div className="w-1/4 h-1 bg-linear-to-r from-primary to-secondary rounded-full" />
            </div>

            <ul className="flex flex-row flex-wrap justify-center gap-1">
              {data.technologies.map((technology, index) => (
                <li key={index}>
                  <SpotlightCard className="flex flex-row items-center gap-x-2 p-2 rounded-xl">
                    <technology.icon
                      className="size-4 text-primary"
                      variant="mono"
                      aria-hidden
                    />
                    <p className="text-xs font-medium"># {technology.name}</p>
                  </SpotlightCard>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-y-1">
              {data.description.map((description, index) => (
                <li key={index}>
                  <p className="text-sm indent-8">{t(description)}</p>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-1">
              <a
                href={data.code ?? undefined}
                target="_blank"
                rel="noreferrer"
                role="button"
                aria-label={t("projects-a11y.goToSourceCode")}
              >
                <Button className="w-full" disabled={!data.code}>
                  <Github variant="mono" aria-hidden />
                  {t("projects.buttons.code")}
                </Button>
              </a>

              <a
                href={data.demo ?? undefined}
                target="_blank"
                rel="noreferrer"
                role="button"
                aria-label={t("projects-a11y.goToDemo")}
              >
                <Button className="w-full" disabled={!data.demo}>
                  <Globe aria-hidden />
                  {t("projects.buttons.demo")}
                </Button>
              </a>

              <Button
                className="w-full col-span-2"
                variant="outline"
                onClick={onClose}
              >
                Fechar projeto
              </Button>
            </div>
          </ScaleIn>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
