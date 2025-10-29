import type { IconType } from "react-icons/lib";

interface IButtonProps {
  name: string;
  description: string;
  icon: IconType;
  href: string;
}

export interface IContactProps {
  buttons: IButtonProps[];
}
