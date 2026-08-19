import FadeIn from "./animations/FadeIn";

interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => {
  return (
    <FadeIn
      className="flex flex-col items-center gap-y-4 text-center"
      as="header"
    >
      <div className="flex flex-col items-center gap-y-1">
        <h2 className="text-3xl md:text-4xl font-black">{title}</h2>
        <div
          className="w-1/2 h-1 bg-linear-to-r from-primary to-secondary rounded-full"
          aria-hidden
        ></div>
      </div>

      <p className="w-full max-w-xl text-sm text-foreground/75">
        {description}
      </p>
    </FadeIn>
  );
};

export default Header;
