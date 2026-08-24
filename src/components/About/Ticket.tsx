import { useTranslation } from "react-i18next";

import type { AboutTicket } from "@src/static/data/About.data";

interface Props {
  items: AboutTicket[];
}

const Ticket = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-row items-center justify-center gap-x-12 w-full h-32 bg-linear-to-r from-primary to-secondary rounded-3xl">
      <span
        className="absolute -top-6 size-12 bg-background rounded-full"
        aria-hidden
      />
      <span
        className="absolute -bottom-6 size-12 bg-background rounded-full"
        aria-hidden
      />

      {items.map(({ title, subtitle }) => (
        <div
          key={title}
          className="flex flex-1 flex-col items-center justify-center -space-y-1"
        >
          <strong className="text-2xl md:text-3xl font-black">{title}</strong>
          <p className="text-xs md:text-sm">{t(subtitle)}</p>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
