import type { PropsWithChildren } from "react";
import { motion, type DOMMotionComponents } from "motion/react";

type MotionTags = keyof DOMMotionComponents;

interface Props extends PropsWithChildren {
  as?: MotionTags;
  delay?: number;
  direction?: "left" | "right";
  className?: string;
}

const SlideIn = ({
  as = "div",
  delay = 0,
  direction = "left",
  children,
  ...props
}: Props) => {
  const Component = motion[as];

  const x = direction === "left" ? -400 : 400;

  return (
    <Component
      initial={{ x }}
      animate={{ x: 0 }}
      exit={{ x }}
      transition={{
        duration: 0.75,
        type: "spring",
        delay,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default SlideIn;
