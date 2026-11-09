import type { PropsWithChildren } from "react";
import {
  motion,
  useReducedMotion,
  type DOMMotionComponents,
} from "motion/react";

type MotionTag = keyof DOMMotionComponents;

interface Props extends PropsWithChildren {
  as?: MotionTag;
  delay?: number;
  className?: string;
  role?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
}

const INITIAL = {
  opacity: 0,
  y: 16,
};

const VISIBLE = {
  opacity: 1,
  y: 0,
};

const FadeIn = ({ as = "div", delay = 0, children, ...props }: Props) => {
  const Component = motion[as];
  const shouldReduceMotion = useReducedMotion();

  return (
    <Component
      initial={shouldReduceMotion ? false : INITIAL}
      whileInView={shouldReduceMotion ? undefined : VISIBLE}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.5,
              delay,
              ease: "easeOut",
            }
      }
      {...props}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
