import { useEffect, useRef } from "react";

import Header from "./Header";
import FormEmail from "./FormEmail";
import QuickAccessButtons from "./QuickAccessButtons";

interface IContactProps {
  setActiveScreen: (value: "contact") => void;
}

const Contact = ({ setActiveScreen }: IContactProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveScreen("contact");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={"contact"}
      className="relative grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5"
    >
      <Header />

      <FormEmail />

      <QuickAccessButtons />
    </section>
  );
};

export default Contact;
