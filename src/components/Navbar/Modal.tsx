import { Card, CardContent } from "@src/components/ui/card";

import { linksData } from "@src/static/LinksData";

interface IModalProps {
  showModal: boolean;
  activeScreen: string;
}

const Modal = ({ showModal, activeScreen }: IModalProps) => {
  return (
    <Card className={showModal ? "absolute top-16 right-4" : "hidden"}>
      <CardContent className="flex flex-col">
        {linksData.map(({ id, text, icon: Icon, action }) => (
          <li
            key={id}
            className={`relative flex flex-row items-center gap-x-4 rounded-md hover:text-primary transition-all duration-300 cursor-pointer px-6 py-4 pr-8 text-base text-nowrap ${
              activeScreen === id
                ? "bg-primary/10 font-semibold text-primary"
                : "font-medium text-primary-text"
            }`}
            onClick={action}
          >
            <Icon size={16} />
            <p>{text}</p>

            {activeScreen === id && (
              <span className="absolute right-4 w-2 h-2 bg-primary rounded-full" />
            )}
          </li>
        ))}
      </CardContent>
    </Card>
  );
};

export default Modal;
