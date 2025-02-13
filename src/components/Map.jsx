import Section from "./Section";
import Heading from "./Heading";
import { serviceMap } from "../assets/";
import { tree2 } from "../assets";
import { Parallax } from "react-scroll-parallax";
const Map = () => {
  return (
    <Section crosses id="map" className="bg-color-5" dark>
      <div>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center text-color-1"
          title="Areas We Service"
        />
        <div className="container lg:flex lg:grow lg:flex-nowrap items-center justify-center">
          <div className="lg:grow lg:basis-1 z-2">
            <img
              src={serviceMap}
              width={750}
              height={750}
              alt="Service Map"
              className=""
            />
          </div>
          <div className="lg:grow lg:basis-1 ">
            <h2 className="h3 mb-6 lg:mx-auto text-center text-color-1">
              Coutnies We Service
            </h2>
            <ul className="text-center flex flex-col lg:gap-y-5 text-color-1">
              <li className="">Wayne</li>
              <li>Washtenaw</li>
              <li>South Oakland</li>
              <li className="">Livingston</li>
            </ul>
          </div>
          <div className="hidden 2xl:block lg:absolute lg:left-10 lg:bottom-0 lg:z-1">
            <Parallax startScroll={1500} endScroll={1850} scale={[0, 1]}>
              <img src={tree2} height={300} width={300} className="" />
            </Parallax>
          </div>
          <div className="hidden 2xl:block lg:absolute lg:right-10 lg:bottom-0 lg:z-1">
            <Parallax startScroll={1550} endScroll={1850} scale={[0, 1]}>
              <img src={tree2} height={300} width={300} className="" />
            </Parallax>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Map;
