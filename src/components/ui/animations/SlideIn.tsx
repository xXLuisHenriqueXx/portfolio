import type { PropsWithChildren } from "react";
import { type DOMMotionComponents, motion } from "framer-motion";

type MotionTags = keyof DOMMotionComponents;
interface ISlideInProps extends PropsWithChildren {
  as?: MotionTags;
  delay?: number;
  direction?: "left" | "right";
  className?: string;
}

const SlideIn = ({
  children,
  as = "div",
  delay = 0,
  direction = "left",
  className,
}: ISlideInProps) => {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ translateX: direction === "left" ? -200 : 200 }}
      whileInView={{ translateX: 0 }}
      transition={{ duration: 0.5, type: "spring", delay }}
    >
      {children}
    </Component>
  );
};

export default SlideIn;
