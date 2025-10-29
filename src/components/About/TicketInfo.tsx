import { tv } from "tailwind-variants";

import { aboutData } from "@src/static/AboutData";

const ticketInfoStyles = tv({
  slots: {
    container:
      "relative flex flex-row items-center justify-center self-center w-[85%] max-w-sm py-8 bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-[102.5%] transition-all duration-300 cursor-pointer",
    containerContent: "flex flex-1 flex-col items-center justify-center",
    titleText: "text-xl lg:text-2xl font-extrabold -mb-1",
    subtitleText:
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

const { container, containerContent, titleText, subtitleText, dot } =
  ticketInfoStyles();

const TicketInfo = () => {
  return (
    <div className={container()}>
      <span className={dot({ position: "top" })} />
      <span className={dot({ position: "bottom" })} />

      {aboutData.ticket.map(({ title, subtitle }) => (
        <div key={title} className={containerContent()}>
          <strong className={titleText()}>{title}</strong>
          <p className={subtitleText()}>{subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketInfo;
