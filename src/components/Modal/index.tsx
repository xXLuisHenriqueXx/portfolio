import { FaGithub } from "react-icons/fa";
import SpotlightCard from "../SpotlightCard";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";

interface IModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  data: any;
}

interface IModalContentProps {
  setShowModal: (showModal: boolean) => void;
  data: any;
}

const ModalContent = ({ setShowModal, data }: IModalContentProps) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-5 bg-black/85 z-[60]"
      onClick={() => setShowModal(false)}
    >
      <article
        className="grid grid-cols-1 gap-y-4 w-full p-4 bg-card rounded-xl border shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <img className="w-full h-64 object-cover rounded-lg" src={data.image} />

        <div className="flex flex-col items-center gap-y-1">
          <h1 className="text-lg font-extrabold text-center">{data.title}</h1>
          <div className="w-1/4 h-1 bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-2">
          {data.technologies.map((technology: any, index: number) => (
            <SpotlightCard
              key={index}
              className="flex flex-row items-center gap-x-1 bg-primary/10 hover:scale-[101%] p-1 rounded-sm transition-all duration-300 cursor-pointer text-xs font-medium"
              spotlightColor="rgba(123, 83, 238, 0.5)"
            >
              <technology.icon className="w-3 h-3 fill-primary" />
              <p className="text-[10px]">#{technology.name}</p>
            </SpotlightCard>
          ))}
        </div>

        <p className="text-xs text-foreground/75 indent-4">
          {data.description}
        </p>

        <div className="flex flex-row gap-x-1">
          <a
            href={data.code}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <Button
              className="relative w-full"
              variant="outline"
              size={"sm"}
              disabled={!data.code}
            >
              <FaGithub className="absolute left-2" /> Código
            </Button>
          </a>

          <a
            href={data.demo}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <Button
              className="relative w-full"
              variant="outline"
              size={"sm"}
              disabled={!data.demo}
            >
              <Globe className="absolute left-2" /> Abrir na Web
            </Button>
          </a>
        </div>
      </article>
    </div>
  );
};

const Modal = ({ showModal, setShowModal, data }: IModalProps) => {
  return showModal && <ModalContent setShowModal={setShowModal} data={data} />;
};

export default Modal;
