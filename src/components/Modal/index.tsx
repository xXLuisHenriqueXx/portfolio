import { tv } from "tailwind-variants";
import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";
import SpotlightCard from "../SpotlightCard";

import type { IProjectProps } from "@src/common/interfaces/Projects.interface";

const modalContentStyles = tv({
  slots: {
    container:
      "fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-5 bg-black/85 z-[60]",
    containerModal:
      "grid grid-cols-1 gap-y-4 w-full max-w-2xl p-4 bg-card rounded-xl border shadow",
    containerTitle: "flex flex-col items-center gap-y-1",
    containerDescription: "flex flex-col gap-y-2",
    containerTools: "flex flex-row flex-wrap justify-center gap-2",
    containerToolItem:
      "flex flex-row items-center gap-x-1 bg-primary/10 hover:scale-[102.5%] p-1 lg:p-2 rounded-sm transition-all duration-300 cursor-pointer text-xs font-medium",
    containerButtons: "flex flex-row gap-x-1",
    image: "w-full aspect-video object-cover rounded-lg",
    iconTool: "w-3 h-3 lg:w-4 lg:h-4 text-primary",
    iconButton: "absolute left-2",
    bottomBar: "w-1/4 h-1 bg-gradient-to-r from-primary to-secondary",
    button: "relative w-full lg:text-sm",
    title: "text-lg font-extrabold text-center",
    nameTool: "text-[10px] lg:text-xs",
    descriptionText: "text-xs lg:text-sm text-foreground/75 indent-4",
  },
});

const {
  container,
  containerModal,
  containerTitle,
  containerDescription,
  containerTools,
  containerToolItem,
  containerButtons,
  image,
  iconTool,
  iconButton,
  bottomBar,
  button,
  title,
  nameTool,
  descriptionText,
} = modalContentStyles();

interface IModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  data: IProjectProps;
}

const Modal = ({ showModal, setShowModal, data }: IModalProps) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className={container()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, type: "spring" }}
          onClick={() => setShowModal(false)}
        >
          <motion.article
            className={containerModal()}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img className={image()} src={data.image} loading="lazy" />

            <div className={containerTitle()}>
              <h1 className={title()}>{data.title}</h1>
              <div className={bottomBar()} />
            </div>

            <div className={containerTools()}>
              {data.technologies.map((technology, index) => (
                <SpotlightCard
                  key={index}
                  className={containerToolItem()}
                  spotlightColor="rgba(123, 83, 238, 0.5)"
                >
                  <technology.icon className={iconTool()} aria-hidden />
                  <p className={nameTool()}>#{technology.name}</p>
                </SpotlightCard>
              ))}
            </div>

            <div className={containerDescription()}>
              {data.description.map((description, index) => (
                <p key={index} className={descriptionText()}>
                  {description}
                </p>
              ))}
            </div>

            <div className={containerButtons()}>
              <a
                href={data.code ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="w-full"
                role="button"
                aria-label="Go to Source Code"
              >
                <Button
                  className={button()}
                  variant="outline"
                  size={"sm"}
                  disabled={!data.code}
                >
                  <FaGithub className={iconButton()} /> Código
                </Button>
              </a>

              <a
                href={data.demo ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="w-full"
                role="button"
                aria-label="Go to Demo"
              >
                <Button
                  className={button()}
                  variant="outline"
                  size={"sm"}
                  disabled={!data.demo}
                >
                  <Globe className={iconButton()} /> Abrir na Web
                </Button>
              </a>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
