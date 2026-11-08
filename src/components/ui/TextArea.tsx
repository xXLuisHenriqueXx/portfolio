import * as React from "react";
import { cn } from "cn";

function TextArea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-w-0 min-h-30 px-4 py-3 bg-transparent border border-border rounded-3xl resize-y text-base placeholder:text-foreground/50 transition-colors duration-300 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { TextArea };
