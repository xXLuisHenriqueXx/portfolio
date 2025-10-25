import { tv } from "tailwind-variants";

const ticketInfoStyles = tv({
  slots: {
    container:
      "relative flex flex-row items-center justify-center self-center w-[85%] max-w-sm py-8 bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-[102.5%] transition-all duration-300 cursor-pointer",
    containerContent: "flex flex-1 flex-col items-center justify-center",
    title: "text-xl lg:text-2xl font-extrabold -mb-1",
    subtitle:
      "text-[8px] lg:text-xs font-normal text-foreground/75 text-center text-nowrap",
    dot: "absolute w-10 h-10 bg-background rounded-full",
  },
  variants: {
    position: {
      top: { dot: "-top-5" },
      bottom: { dot: "-bottom-5" },
    },
  },
});

const { container, containerContent, title, subtitle, dot } =
  ticketInfoStyles();

const TicketInfo = () => {
  return (
    <div className={container()}>
      <span className={dot({ position: "top" })} />
      <span className={dot({ position: "bottom" })} />

      <div className={containerContent()}>
        <strong className={title()}>2+</strong>
        <p className={subtitle()}>anos de experiência</p>
      </div>

      <div className={containerContent()}>
        <strong className={title()}>16+</strong>
        <p className={subtitle()}>tecnologias dominadas</p>
      </div>
    </div>
  );
};

export default TicketInfo;
