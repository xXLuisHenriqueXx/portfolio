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

  return (
    <Component
      initial={{ translateX: direction === "left" ? -200 : 200 }}
      whileInView={{ translateX: 0 }}
      transition={{ duration: 0.5, type: "spring", delay }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default SlideIn;
