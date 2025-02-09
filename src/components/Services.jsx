import { services } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useState } from "react";
import ModalDialog from "./ModalDialog";

const Services = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Section crosses id="services">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Appraisal Services"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {services.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.0rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 grow text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto" onClick={handleOpen}>
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <div
                    className="flex items-center ml-auto pointer-events-auto cursor-pointer"
                    onClick={handleOpen}
                  >
                    <p className="ml-auto font-code text-xs font-bold text-n-3 uppercase tracking-wider">
                      Get a Quote
                    </p>
                    <Arrow />
                  </div>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-4"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
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
          ))}
        </div>
        <ModalDialog open={open} isContact={false} handleClose={handleClose} />
      </div>
    </Section>
  );
};

export default Services;
