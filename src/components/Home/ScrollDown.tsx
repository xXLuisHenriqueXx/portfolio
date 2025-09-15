import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const ScrollDown = () => {
  return (
    <article className="flex flex-col items-center justify-center gap-y-2 z-10">
      <motion.div
        animate={{ translateY: [0, 2, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <ArrowDownCircle
          className="w-6 h-6 text-foreground/75"
          strokeWidth={1}
        />
      </motion.div>

      <p className="text-xs font-medium text-foreground/75">Role para baixo</p>
    </article>
  );
};

export default ScrollDown;
