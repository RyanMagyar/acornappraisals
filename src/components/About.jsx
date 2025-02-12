import Section from "./Section";
import Heading from "./Heading";
import { aboutBackground } from "../assets";
import { plymouthPic } from "../assets";
const About = () => {
  return (
    <div>
      <Section
        crosses
        id="about"
        className="bg-color-3"
        style={{
          backgroundImage: `url(${aboutBackground})`,
        }}
      >
        <div>
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center"
            title="About Us"
          />
          <div className="container lg:grow lg:basis-1 lg:flex lg:flex-nowrap items-center justify-center">
            <div className="lg:grow lg:basis-1 lg:mr-10">
              <img
                src={plymouthPic}
                width={600}
                height={300}
                alt="Service Map"
                className="mx-auto"
              />
            </div>
            <div className="lg:grow lg:basis-1 lg:ml-10 lg:max-w-300">
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
                from $350-$500 depending on the property.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
