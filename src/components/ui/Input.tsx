import * as React from "react";

import { cn } from "@src/lib/utils";

type Props = React.ComponentProps<"input"> & {
  label?: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="relative flex flex-col gap-y-1 w-full">
        {label && <label className="pl-4 text-sm">{label}</label>}

        <input
          ref={ref}
          className={cn(
            "w-full min-h-12 px-4 bg-transparent border border-border focus-visible:border-primary aria-invalid:border-error rounded-full transition-all duration-300 text-sm placeholder:text-foreground/50 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
