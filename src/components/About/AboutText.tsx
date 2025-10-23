import { aboutData } from "@src/static/AboutData";

const AboutText = () => {
  return (
    <article className="flex flex-col gap-y-2 w-full max-w-xl text-xs lg:text-sm 2xl:text-base text-foreground/75 indent-4">
      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
};

export default AboutText;
