const Header = () => {
  return (
    <>
      <article className="flex flex-col items-center gap-y-1">
        <h1 className="text-3xl font-extrabold text-center">MEUS PROJETOS</h1>
        <div className="w-1/2 h-1 bg-gradient-to-r from-primary to-secondary" />
      </article>

      <p className="text-xs text-foreground/75 text-center">
        Abaixo você pode visualizar a comprovação das minhas habilidades
        descritas acima, por meio de projetos em que trabalhei.
      </p>
    </>
  );
};

export default Header;
