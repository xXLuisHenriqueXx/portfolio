import * as React from "react";

import { cn } from "@src/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 md:p-8 rounded-4xl border bg-card", className)}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
