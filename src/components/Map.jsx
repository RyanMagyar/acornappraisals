import Section from "./Section";
import Heading from "./Heading";
import { serviceMap } from "../assets/";
const Map = () => {
  return (
    <Section crosses id="map" className="bg-color-5">
      <div>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center text-color-1"
          title="Areas We Service"
        />
        <div className="container lg:flex lg:grow lg:flex-nowrap items-center justify-center">
          <div className="lg:grow lg:basis-1">
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
              <li className="">Livingston</li>
              <li>Washtenaw</li>
              <li>South Oakland</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Map;
