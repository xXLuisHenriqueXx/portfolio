import { Separator } from "../ui/separator";

import AboutText from "./AboutText";
import TicketInfo from "./TicketInfo";
import Tools from "./Tools";
import Certificates from "./Certificates";

const About = () => {
  return (
    <section className="relative grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5">
      <AboutText />

      <Separator />

      <article className="flex flex-col gap-y-8 w-full">
        <TicketInfo />

        <Tools />

        <Certificates />
      </article>
    </section>
  );
};

export default About;
