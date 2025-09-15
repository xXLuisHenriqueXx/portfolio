const TicketInfo = () => {
  return (
    <div className="relative flex flex-row items-center justify-center self-center w-[85%] py-8 bg-gradient-to-r from-primary to-secondary rounded-xl">
      <div className="absolute -top-5 w-10 h-10 bg-background rounded-full" />
      <div className="absolute -bottom-5 w-10 h-10 bg-background rounded-full" />

      <div className="flex flex-1 flex-col items-center justify-center">
        <strong className="text-xl font-extrabold -mb-1">2+</strong>
        <p className="text-[8px] font-normal text-foreground/75 text-center text-nowrap">
          anos de experiência
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <strong className="text-xl font-extrabold -mb-1">16+</strong>
        <p className="text-[8px] font-normal text-foreground/75 text-center text-nowrap">
          tecnologias dominadas
        </p>
      </div>
    </div>
  );
};

export default TicketInfo;
