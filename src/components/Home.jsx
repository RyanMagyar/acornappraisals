import { Button } from "@mui/material";
import Section from "./Section";
import { homeBackground } from "../assets";
import { useState } from "react";
import ModalDialog from "./ModalDialog";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [isContact, setContact] = useState(false);
  const handleOpen = (contact) => {
    setContact(contact);
    setOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-color-5"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="home"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[0.5rem]">
          <h1 className="h1 mb-6 text-color-1">Acorn Appraisal Services</h1>
          <h2 className="h2 mb-6 text-color-3">
            Serving Southeast Michigan Since 1993
          </h2>
          <div className="mx-auto pt-20">
            <Button
              variant="contained"
              className={"mr-5"}
              onClick={() => handleOpen(false)}
            >
              Get a Quote
            </Button>
            <Button
              variant="contained"
              sx={{ width: 132 }}
              className={"ml-5"}
              onClick={() => handleOpen(true)}
            >
              Contact Us
            </Button>
          </div>
        </div>
        <ModalDialog
          open={open}
          isContact={isContact}
          handleClose={handleClose}
        />
      </div>
    </Section>
  );
};

export default Home;
