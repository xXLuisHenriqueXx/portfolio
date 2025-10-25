interface IButtonProps {
  label: string;
  variant: "outline" | "gradient";
  action: () => void;
}

export interface IHomeDataProps {
  experiences: string[];
  introduction: string;
  buttons: IButtonProps[];
  image: string;
}
