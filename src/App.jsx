import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./components/Home";
import Services from "./components/Services";
import Map from "./components/Map";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <Services />
        <Map></Map>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
