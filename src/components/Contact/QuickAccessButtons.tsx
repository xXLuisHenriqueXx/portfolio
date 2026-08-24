import { useTranslation } from "react-i18next";

import { Button } from "@src/components/ui/Button";

import type { ContactButton } from "@src/static/data/Contact.data";

interface Props {
  items: ContactButton[];
}

const QuickAccessButtons = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <nav className="flex flex-row gap-x-1 w-full">
      {items.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          className="flex flex-1"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label={`${t("contact-a11y.goTo")} ${name}`}
        >
          <Button className="w-full" variant="outline">
            <Icon variant="mono" aria-hidden /> {name}
          </Button>
        </a>
      ))}
    </nav>
  );
};

export default QuickAccessButtons;
