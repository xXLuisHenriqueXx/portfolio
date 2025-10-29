import { tv } from "tailwind-variants";

import SpotlightCard from "../SpotlightCard";

import { contactData } from "@src/static/ContactData";

const quickAccessButtonsStyles = tv({
  slots: {
    container: "flex flex-col gap-y-2 w-full max-w-4xl",
    containerItem:
      "bg-card hover:scale-[101%] w-full p-4 rounded-lg transition-all duration-300 cursor-pointer",
    containerContent: "flex flex-row items-center justify-between",
    containerText: "flex flex-row items-center gap-x-2",
    icon: "w-8 h-8 text-primary",
    title: "text-sm font-semibold",
    descriptionText:
      "max-w-[60%] text-[10px] font-medium text-foreground/75 text-wrap",
  },
});

const {
  container,
  containerItem,
  containerContent,
  containerText,
  icon,
  title,
  descriptionText,
} = quickAccessButtonsStyles();

const QuickAccessButtons = () => {
  return (
    <div className={container()}>
      {contactData.buttons.map(({ name, href, description, icon: Icon }) => (
        <SpotlightCard
          key={name}
          className={containerItem()}
          spotlightColor="rgba(123, 83, 238, 0.5)"
        >
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={containerContent()}
          >
            <div className={containerText()}>
              <Icon className={icon()} />
              <p className={title()}>{name}</p>
            </div>
            <p className={descriptionText()}>{description}</p>
          </a>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default QuickAccessButtons;
