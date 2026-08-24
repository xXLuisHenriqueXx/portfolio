import { useTranslation } from "react-i18next";

import FadeIn from "@src/components/ui/animations/FadeIn";
import Background from "./Background";
import Greetings from "./Greetings";
import UserActions from "./UserActions";

import { HOME_DATA } from "@src/static/data/Home.data";

const Home = () => {
  const { t } = useTranslation();
  const { roles, buttons } = HOME_DATA;

  return (
    <section
      id={"home"}
      className="relative flex items-center justify-center w-full h-dvh py-20 px-6"
      aria-label={t("home-a11y.section")}
    >
      <Background />

      <FadeIn
        className="flex flex-1 flex-col items-center gap-y-8"
        as="article"
      >
        <Greetings items={roles} />
        <UserActions items={buttons} />
      </FadeIn>
    </section>
  );
};

export default Home;
