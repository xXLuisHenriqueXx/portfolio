import * as React from "react";

import { cn } from "@src/lib/utils";

type Props = React.ComponentProps<"textarea"> & {
  label?: string;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="relative flex flex-col gap-y-1 w-full">
        {label && <label className="pl-4 text-sm">{label}</label>}

        <textarea
          ref={ref}
          className={cn(
            "w-full min-w-0 border border-border placeholder:text-foreground/50 bg-transparent min-h-30 px-4 py-3 rounded-4xl resize-y text-sm transition-all duration-300 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary aria-invalid:ring-error/20 aria-invalid:border-error",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
