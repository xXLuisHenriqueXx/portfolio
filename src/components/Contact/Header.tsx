const Header = () => {
  return (
    <>
      <article className="flex flex-col items-center gap-y-1">
        <h1 className="text-3xl font-extrabold text-center">MEUS CONTATOS</h1>
        <div className="w-1/2 h-1 bg-gradient-to-r from-primary to-secondary" />
      </article>

      <p className="text-xs text-foreground/75 text-center">
        Abaixo você pode entrar em contato comigo, estou sempre aberto a
        propostas. Me chame para combinarmos nosso próximo projeto!
      </p>
    </>
  );
};

export default Header;
