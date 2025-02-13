import { services } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useState, useEffect } from "react";
import ModalDialog from "./ModalDialog";
import { Parallax } from "react-scroll-parallax";
import { acorn1, acorn2 } from "../assets";

const Services = () => {
  const [open, setOpen] = useState(false);
  const [QuoteType, setQuoteType] = useState("");
  const [translateYRange, setTranslateYRange] = useState(["0px", "500px"]);
  const handleOpen = (QuoteType) => {
    setQuoteType(QuoteType);
    setOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const updateTranslateY = () => {
      if (window.innerWidth < 768) {
        setTranslateYRange(["-2350", "6000"]);
      } else {
        setTranslateYRange(["-650", "3000"]);
      }
    };

    updateTranslateY(); // Set initial value
    window.addEventListener("resize", updateTranslateY);
    return () => window.removeEventListener("resize", updateTranslateY);
  }, []);

  return (
    <Section crosses id="services" className="bg-color-1">
      <Parallax
        translateY={translateYRange}
        rotate={[0, 720]}
        className="absolute -top-[800px] md:-top-[550px] lg:-top-[620px] left-5 lg:left-20"
      >
        <img
          src={acorn1}
          alt="Falling Acorn"
          className={`w-16 h-16 transition-transform duration-500`}
        />
      </Parallax>
      <Parallax
        translateY={translateYRange}
        rotate={[120, 840]}
        className="absolute -top-[800px] md:-top-[550px] lg:-top-[620px] right-5 lg:right-20"
      >
        <img
          src={acorn2}
          alt="Falling Acorn"
          className={`w-16 h-16 transition-transform duration-500`}
        />
      </Parallax>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center text-color-5"
          title="Appraisal Services"
        />

        <div className="flex items-center justify-center flex-wrap gap-10 mb-10">
          {services.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="drop-shadow-[0_3px_8px_rgba(52,0,104)] md:hover:drop-shadow-[0_8px_30px_rgba(52,0,104)] transition-all duration-300 ease-in-out ">
                <div className="relative group">
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.0rem] pointer-events-none">
                    <h5 className="h5 text-color-5 mb-5">{item.title}</h5>
                    <p className="body-2 grow text-color-5">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <div
                        id="Quote Line"
                        className="flex group items-center ml-auto pointer-events-auto cursor-pointer"
                        onClick={() => handleOpen(item.QuoteType)}
                        onTouchStart={() => handleOpen(item.QuoteType)}
                      >
                        <p className="ml-auto text-xs font-bold text-color-2 uppercase tracking-wider">
                          Get a Quote
                        </p>
                        <Arrow />
                      </div>
                    </div>
                  </div>

                  {item.light && <GradientLight />}
                  <div
                    className="absolute inset-0.5 bg-color-1"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div
                      id="card-bg"
                      className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10 "
                    >
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ModalDialog
          open={open}
          isContact={false}
          QuoteType={QuoteType}
          handleClose={handleClose}
        />
      </div>
    </Section>
  );
};

export default Services;
