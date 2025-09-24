import Header from "./Header";
import FormEmail from "./FormEmail";
import QuickAccessButtons from "./QuickAccessButtons";

const Contact = () => {
  return (
    <section className="relative grid grid-cols-1 place-items-center gap-y-8 w-full pt-12 pb-9 px-5">
      <Header />

      <FormEmail />

      <QuickAccessButtons />
    </section>
  );
};

export default Contact;
