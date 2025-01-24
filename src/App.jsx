import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./components/Home";
import Services from "./components/Services";
import Map from "./components/Map";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material";
import About from "./components/About";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b25cb1",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Home />
          <Services />
          <Map></Map>
          <About></About>
          <Footer></Footer>
        </div>

        <ButtonGradient />
      </ThemeProvider>
    </>
  );
};

export default App;
