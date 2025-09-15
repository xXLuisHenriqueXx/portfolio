import SplitText from "../SplitText";
import TextType from "../TextType";

const Greetings = () => {
  return (
    <div className="flex flex-col -gap-y-2">
      <h2 className="text-base font-light text-foreground text-center">
        Olá, me chamo
      </h2>

      <SplitText
        text="LUIS HENRIQUE"
        className="text-4xl font-black text-start text-primary"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      <h2 className="text-base font-light text-foreground text-center">
        e sou{" "}
        <TextType
          className="font-bold"
          text={[
            "Desenvolvedor Web",
            "Desenvolvedor Mobile",
            "Desenvolvedor FullSatck",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </h2>
    </div>
  );
};

export default Greetings;
