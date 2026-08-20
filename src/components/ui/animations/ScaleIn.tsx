import type { PropsWithChildren } from "react";
import { motion, type DOMMotionComponents } from "framer-motion";

type MotionTags = keyof DOMMotionComponents;
interface Props extends PropsWithChildren {
  as?: MotionTags;
  delay?: number;
  className?: string;
}

const ScaleIn = ({ as = "div", delay = 0, children, ...props }: Props) => {
  const Component = motion[as];

  return (
    <Component
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, type: "spring", delay }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ScaleIn;
