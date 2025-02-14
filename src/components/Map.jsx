import Section from "./Section";
import Heading from "./Heading";
import { serviceMap } from "../app/public";
import { tree2 } from "../app/public";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

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
            <Image
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
            <Parallax startScroll={1600} endScroll={1850} scale={[0, 1]}>
              <div className="relative h-[300px] w-[300px] bottom-0">
                <Image
                  src={tree2}
                  alt="Tree"
                  fill
                  sizes="(max-width:300px) 100vw, (max-width: 0px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </Parallax>
          </div>
          <div className="hidden 2xl:block lg:absolute lg:right-10 lg:bottom-0 lg:z-1">
            <Parallax startScroll={1600} endScroll={1850} scale={[0, 1]}>
              <div className="relative h-[300px] w-[300px] bottom-0">
                <Image
                  src={tree2}
                  alt="Tree"
                  fill
                  sizes="(max-width:300px) 100vw, (max-width: 0px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Map;
