import { Card, CardContent } from "@src/components/ui/card";
import { Separator } from "@src/components/ui/separator";
import { linksData } from "@src/static/LinksData";

interface IModalProps {
  showModal: boolean;
}

const Modal = ({ showModal }: IModalProps) => {
  return (
    <Card className={showModal ? "absolute top-16 right-4" : "hidden"}>
      <CardContent className="flex flex-col gap-y-4">
        {linksData.map(({ id, text, icon: Icon }, index) => (
          <>
            <li
              key={id}
              className="flex flex-row items-center gap-x-4 text-base font-medium text-primary-text text-nowrap"
            >
              <Icon size={16} />
              <p>{text}</p>
            </li>

            {index !== linksData.length - 1 && <Separator />}
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default Modal;
