const Header = () => {
  return (
    <>
      <article className="flex flex-col items-center gap-y-1">
        <h1 className="text-3xl font-extrabold text-center">
          MINHAS HABILIDADES
        </h1>
        <div className="w-1/2 h-1 bg-gradient-to-r from-primary to-secondary" />
      </article>

      <p className="text-xs text-foreground/75 text-center">
        Abaixo você pode visualizar com maior nível de detalhe as tecnologias e
        ferramentas que possuo conhecimento.
      </p>
    </>
  );
};

export default Header;
