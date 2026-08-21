import { useTranslation } from "react-i18next";

import { Button } from "@src/components/ui/Button";

import type { NavbarLink } from "@src/static/NavbarData";
import { cn } from "@src/lib/utils";
import type { TActiveScreen } from "@src/App";

interface Props {
  items: NavbarLink[];
  active: TActiveScreen;
}

const DesktopLinks = ({ items, active }: Props) => {
  const { t } = useTranslation();

  return (
    <nav className="hidden lg:flex flex-row items-center gap-x-2 p-2 bg-primary/5 rounded-full">
      {items.map(({ id, text, action }) => {
        const isActive = active === id;

        return (
          <Button
            key={id}
            className={cn("relative hover:px-6", {
              "px-6 bg-primary/10 text-primary": isActive,
            })}
            variant="ghost"
            onClick={action}
            aria-current={isActive ? "page" : undefined}
          >
            {t(text)}

            {isActive && (
              <span className="absolute -bottom-0.5 w-6 h-1 bg-primary rounded-full" />
            )}
          </Button>
        );
      })}
    </nav>
  );
};

export default DesktopLinks;
