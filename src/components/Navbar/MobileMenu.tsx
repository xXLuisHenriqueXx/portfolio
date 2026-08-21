import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "@src/components/ui/Card";
import { Button } from "@src/components/ui/Button";
import SlideIn from "@src/components/ui/animations/SlideIn";

import { cn } from "@src/lib/utils";
import useDismiss from "@src/hooks/useDismiss";
import type { NavbarLink } from "@src/static/data/Navbar.data";

interface Props {
  open: boolean;
  onClose: () => void;
  active: string;
  items: NavbarLink[];
}

const Modal = ({ open, onClose, active, items }: Props) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement | null>(null);
  useDismiss({ ref, enabled: open, onDismiss: onClose });

  if (!open) return null;

  return (
    <SlideIn
      className="absolute top-20 right-6"
      direction="right"
      aria-label={t("navbar-a11y.mobileNavigation")}
    >
      <Card ref={ref} className="min-w-56">
        <nav className="flex flex-col gap-y-2">
          {items.map(({ id, text, icon: Icon, action }) => {
            const isActive = active === id;
            return (
              <Button
                key={id}
                className={cn("relative w-full px-8", {
                  "bg-primary/10 text-primary": isActive,
                })}
                variant="ghost"
                onClick={action}
                role="menuitem"
              >
                <Icon size={16} aria-hidden />
                {t(text)}

                {isActive && (
                  <span className="absolute top-1/2 right-4 -translate-y-1/2 size-2 bg-primary rounded-full" />
                )}
              </Button>
            );
          })}
        </nav>
      </Card>
    </SlideIn>
  );
};

export default Modal;
