//import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import ModalDialog from "./ModalDialog";
import Image from "next/image";

//import { brainwave } from "../assets";
//import { acorn } from "../assets";
import acornLogo from "../app/public/AcornLogo.svg";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../app/public/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  //const pathname = useLocation();
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [open, setOpen] = useState(false);
  const [isContact, setContact] = useState(false);
  const handleOpen = (contact) => {
    enablePageScroll();
    setContact(contact);
    setOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const handleClose = () => {
    setOpen(false);
    toggleNavigation();
    document.body.style.overflow = "unset";
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-color-1/90 lg:background-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.7 xl:px-10 max-lg:py-4">
        <a className="block w-[16rem] xl:mr-8" href="#home">
          <Image src={acornLogo.src} width={375} height={91} alt="AcornLogo" />
        </a>

        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.onlyMobile ? "#" : item.url}
                onClick={(event) => {
                  var contact = false;
                  if (item.url == "contact") {
                    contact = true;
                  }
                  if (item.onlyMobile) {
                    event.preventDefault();
                    handleOpen(contact);
                  } else {
                    handleClick();
                  }
                }}
                className={`block relative font-code text-2xl uppercase text-color-5 transistion-colors hover:text-color-7 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-[14px] lg:front-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-color-5"
                    : "lg:text-color-5/50"
                } lg:leading-5 lg:hover:text-color-5 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <a
          onClick={() => handleOpen(true)}
          className="button hidden mr-8 text-color-5/50 transition-colors hover:text-color-5 lg:block cursor-pointer"
        >
          Contact Us
        </a>
        <Button
          className="hidden lg:flex hover:text-n-1/50"
          onClick={() => handleOpen(false)}
        >
          Get a Quote
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        <ModalDialog
          open={open}
          isContact={isContact}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Header;
