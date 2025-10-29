import { tv } from "tailwind-variants";

const certificateInfoStyles = tv({
  slots: {
    container:
      "flex flex-col items-center gap-y-2 lg:gap-y-4 text-[8px] lg:text-[10px] 2xl:text-xs text-center",
    title:
      "text-[10px] lg:text-sm 2xl:text-base font-semibold text-secondary text-center",
    textDuration: "text-nowrap",
    text: "w-[80%]",
  },
});

const { container, title, textDuration, text } = certificateInfoStyles();

interface ICertificateInfoProps {
  name: string;
  duration: string;
  description: string;
}

const CertificateInfo = ({
  name,
  duration,
  description,
}: ICertificateInfoProps) => {
  return (
    <div className={container()}>
      <h3 className={title()}>{name}</h3>
      <p className={textDuration()}>{duration}</p>
      <p className={text()}>{description}</p>
    </div>
  );
};

export default CertificateInfo;
