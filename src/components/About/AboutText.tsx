import { aboutData } from "@src/static/AboutData";

const AboutText = () => {
  return (
    <article className="flex flex-col gap-y-2 text-xs text-foreground/75 indent-4">
      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
};

export default AboutText;
