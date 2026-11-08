import * as React from "react";
import { cn } from "cn";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group/card flex flex-col gap-2 p-4 md:p-8 bg-card rounded-4xl overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

export { Card };
