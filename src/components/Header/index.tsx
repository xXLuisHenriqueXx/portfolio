interface IHeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: IHeaderProps) => {
  return (
    <header className="flex flex-col items-center gap-y-4">
      <div className="flex flex-col items-center gap-y-1">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center">
          {title}
        </h1>
        <div className="w-1/2 h-1 bg-gradient-to-r from-primary to-secondary" />
      </div>

      <p className="w-full max-w-xl text-xs lg:text-sm 2xl:text-base text-foreground/75 text-center">
        {description}
      </p>
    </header>
  );
};

export default Header;
