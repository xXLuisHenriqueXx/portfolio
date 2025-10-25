import { tv } from "tailwind-variants";

const headerStyles = tv({
  slots: {
    container: "flex flex-col items-center gap-y-4",
    containerTitle: "flex flex-col items-center gap-y-1",
    titleText: "text-3xl lg:text-4xl font-extrabold text-center",
    descriptionText:
      "w-full max-w-xl text-xs lg:text-sm 2xl:text-base text-foreground/75 text-center",
    bottomBar: "w-1/2 h-1 bg-gradient-to-r from-primary to-secondary",
  },
});

const { container, containerTitle, titleText, descriptionText, bottomBar } =
  headerStyles();

interface IHeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: IHeaderProps) => {
  return (
    <header className={container()}>
      <div className={containerTitle()}>
        <h1 className={titleText()}>{title}</h1>
        <div className={bottomBar()} />
      </div>

      <p className={descriptionText()}>{description}</p>
    </header>
  );
};

export default Header;
