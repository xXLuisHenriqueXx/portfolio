import type { FC } from "react";

import type { IconProps } from "@src/static/SVGs";

interface ITicketProps {
  title: string;
  subtitle: string;
}

interface IToolProps {
  name: string;
  icon: FC<IconProps>;
}

interface ICertificateProps {
  image: string;
  name: string;
  duration: string;
  description: string;
}

export interface IAboutProps {
  paragraphs: string[];
  ticket: ITicketProps[];
  tools: IToolProps[];
  certificates: ICertificateProps[];
}
