import Header from "./Header";
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <section className="relative grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5 bg-gradient-to-b from-card to-[#1B142F]">
      <Header />

      <SkillsList />
    </section>
  );
};

export default Skills;
