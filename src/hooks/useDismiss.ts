import { type RefObject, useEffect } from "react";

interface UseDismissProps {
  ref: RefObject<HTMLElement | null>;
  enabled: boolean;
  onDismiss: () => void;
}

export default function useDismiss({
  ref,
  enabled,
  onDismiss,
}: UseDismissProps) {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        onDismiss();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismiss();
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, onDismiss, ref]);
}
