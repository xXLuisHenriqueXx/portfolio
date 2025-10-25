import { tv } from "tailwind-variants";

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
    <article className={container()}>
      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
};

export default AboutText;
