import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const scrollDownStyles = tv({
  slots: {
    container:
      "lg:absolute bottom-12 flex flex-col items-center justify-center gap-y-2 z-10",
    icon: "w-6 h-6 lg:w-8 lg:h-8 text-foreground/75",
    text: "text-xs lg:text-sm font-medium text-foreground/75",
  },
});

const { container, icon, text } = scrollDownStyles();

const ScrollDown = () => {
  return (
    <article className={container()}>
      <motion.div
        animate={{ translateY: [0, 5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <ArrowDownCircle className={icon()} strokeWidth={1} />
      </motion.div>

      <p className={text()}>Role para baixo</p>
    </article>
  );
};

export default ScrollDown;
