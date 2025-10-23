import { useMemo, useState } from "react";
import { Menu, Sun, X } from "lucide-react";

import { Button } from "../ui/button";
import Modal from "./Modal";

import type { TActiveScreen } from "@src/App";

import Icon from "@src/assets/icon.svg";
import FlagBr from "@src/assets/flag-br.svg";
import FlagUs from "@src/assets/flag-us.svg";
import { linksData } from "@src/static/LinksData";

interface INavbarProps {
  activeScreen: TActiveScreen;
}

const Navbar = ({ activeScreen }: INavbarProps) => {
  const [isPortuguese, setIsPortuguese] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const languageButtonData = useMemo(() => {
    if (isPortuguese) {
      return { image: FlagBr, text: "PT" };
    } else {
      return { image: FlagUs, text: "US" };
    }
  }, [isPortuguese]);

  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center p-5 lg:px-8 z-50">
      <img
        className="cursor-pointer"
        src={Icon}
        alt="Logo LH"
        onClick={() =>
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <ul className="hidden lg:flex flex-row items-center gap-x-6 px-4 py-2 bg-background/75 rounded-xl">
        {linksData.map(({ id, text, action }) => (
          <li
            key={id}
            className={`relative flex flex-row items-center justify-center text-sm hover:text-primary transition-all duration-300 cursor-pointer ${
              activeScreen === id
                ? "px-4 py-2 rounded-md bg-primary/10 font-semibold text-primary"
                : "font-medium text-primary-text"
            }`}
            onClick={action}
          >
            <p>{text}</p>

            {activeScreen === id && (
              <span className="absolute -bottom-0.5 w-6 h-1 bg-primary rounded-full" />
            )}
          </li>
        ))}
      </ul>

      <ul className="flex flex-row items-center gap-x-2">
        <Button
          variant="outline"
          size={"sm"}
          onClick={() => setIsPortuguese(!isPortuguese)}
        >
          <img
            className="w-4 h-4"
            src={languageButtonData.image}
            alt="Bandeira"
          />

          {languageButtonData.text}
        </Button>

        <Button variant={"outline"} className="size-8">
          <Sun />
        </Button>

        <Button
          variant={"default"}
          className="relative lg:hidden size-8"
          onClick={() => setShowModal(!showModal)}
        >
          {showModal ? <X /> : <Menu />}
        </Button>

        <Modal showModal={showModal} activeScreen={activeScreen} />
      </ul>
    </nav>
  );
};

export default Navbar;
