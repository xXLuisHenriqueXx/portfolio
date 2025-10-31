import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

import { aboutData } from "@src/static/AboutData";

const aboutTextStyles = tv({
  slots: {
    container:
      "flex flex-col gap-y-2 w-full max-w-xl text-xs lg:text-sm 2xl:text-base text-foreground/75 indent-4",
  },
});

const { container } = aboutTextStyles();

const AboutText = () => {
  return (
    <motion.article
      className={container()}
      initial={{ translateX: -200, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ delay: 0.25, duration: 1, type: "spring" }}
      viewport={{ once: true }}
    >
      {aboutData.paragraphs.map((paragraph: string) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </motion.article>
  );
};

export default AboutText;
