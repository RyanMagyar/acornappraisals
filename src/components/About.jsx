import Section from "./Section";
import Heading from "./Heading";
import aboutBackground from "../app/public/about-bg.png";
import { joycePhoto, tree } from "../app/public";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <Section
        crosses
        id="about"
        className="bg-color-3"
        style={{
          backgroundImage: `url(${aboutBackground.src})`,
        }}
      >
        <div>
          <Heading
            className="md:max-w-md lg:max-w-2xl text-color-5 text-center"
            title="About Us"
          />
          <div className="container lg:grow lg:basis-1 lg:flex lg:flex-nowrap items-center justify-center">
            <div className="lg:grow lg:basis-1 lg:mr-10">
              <Image
                src={tree}
                width={450}
                alt="Tree"
                style={{ height: "auto" }}
                className="mx-auto"
              />
            </div>
            <div className="lg:grow lg:basis-1 lg:ml-10 text-color-5 md:text-[20px] lg:max-w-300">
              <Image
                src={joycePhoto}
                width={200}
                alt="Joyce Photo"
                style={{ height: "auto" }}
                className="mx-auto rounded-[50%] mb-10"
              />

              <p>
                For over 25 years, Acorn Appraisal Services has provided
                top-rated home appraisals throughout Southeast Michigan.
              </p>
              <div>&nbsp;</div>
              <p>
                Joyce Johnson is a State Licensed Appraiser with a full support
                staff available to quickly and accurately value residential real
                estate.
              </p>
              <div>&nbsp;</div>
              <p>
                Uniform Residential Appraisal Report (URAR) fees typically range
                from $350-$550 depending on the property.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
