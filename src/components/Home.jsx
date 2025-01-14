import Button from "./Button";
import Section from "./Section";

const Home = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 text-n-2">Acorn Appraisal Services</h1>
          <h2 className="h2 mb-6 text-n-2">
            Serving Southeast Michigan Since 1993
          </h2>
          <div className="mx-auto">
            <Button className={"lg:mr-5"} white>
              Appraisal Services
            </Button>
            <Button className={"lg:ml-5"} white>
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
