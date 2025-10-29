interface IButtonProps {
  label: string;
  variant: "outline" | "gradient";
  action: () => void;
}

export interface IHomeProps {
  experiences: string[];
  introduction: string;
  buttons: IButtonProps[];
  image: string;
}
