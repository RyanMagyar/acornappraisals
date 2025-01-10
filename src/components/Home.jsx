import Section from "./Section";

const Home = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem"
      customPaddings
      id="home"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 m-6">Welcome to Acorn Appraisals!</h1>
        </div>
      </div>
    </Section>
  );
};

export default Home;
