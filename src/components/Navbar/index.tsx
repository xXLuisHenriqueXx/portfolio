import { useMemo, useState } from "react";
import { Menu, Sun, X } from "lucide-react";

import { Button } from "../ui/button";
import Modal from "./Modal";

import Icon from "@src/assets/icon.svg";
import FlagBr from "@src/assets/flag-br.svg";
import FlagUs from "@src/assets/flag-us.svg";

const Navbar = () => {
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
    <nav className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center p-5 z-50">
      <img src={Icon} alt="Logo LH" />

      <ul className="hidden">
        <li className="text-sm font-medium text-primary-text">Home</li>
        <li className="text-sm font-medium text-primary-text">About Me</li>
        <li className="text-sm font-medium text-primary-text">Skills</li>
        <li className="text-sm font-medium text-primary-text">Projects</li>
        <li className="text-sm font-medium text-primary-text">Contact</li>
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
          className="relative size-8"
          onClick={() => setShowModal(!showModal)}
        >
          {showModal ? <X /> : <Menu />}
        </Button>

        <Modal showModal={showModal} />
      </ul>
    </nav>
  );
};

export default Navbar;
