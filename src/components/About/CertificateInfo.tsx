import { tv } from "tailwind-variants";

const certificateInfoStyles = tv({
  slots: {
    container:
      "flex flex-col items-center gap-y-2 lg:gap-y-4 text-[8px] lg:text-[10px] 2xl:text-xs text-center",
    containerText: "flex flex-col gap-y-1",
    title: "text-[10px] lg:text-sm 2xl:text-base font-semibold text-secondary",
    text: "w-[80%]",
    highlight: "font-semibold",
  },
});

const { container, containerText, title, text, highlight } =
  certificateInfoStyles();

const CertificateInfo = () => {
  return (
    <div className={container()}>
      <h3 className={title()}>
        Certificação <br /> AWS CFL-02
      </h3>

      <div className={containerText()}>
        <p>
          Adquirida em: <strong className={highlight()}>09/06/2025</strong>
        </p>
        <p>
          Expira em: <strong className={highlight()}>09/06/2028</strong>
        </p>
      </div>

      <p className={text()}>
        Certificação que adquiri durante meu estágio na Compass UOL.
      </p>
    </div>
  );
};

export default CertificateInfo;
