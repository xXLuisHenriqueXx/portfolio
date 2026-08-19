"use client";

import type { PropsWithChildren } from "react";
import { type DOMMotionComponents, motion } from "framer-motion";

type MotionTags = keyof DOMMotionComponents;
interface IFadeInProps extends PropsWithChildren {
  as?: MotionTags;
  delay?: number;
  className?: string;
}

const FadeIn = ({
  as = "div",
  delay = 0,
  children,
  ...props
}: IFadeInProps) => {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(5px)" }}
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
