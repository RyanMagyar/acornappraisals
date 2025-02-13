import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./components/Home";
import Services from "./components/Services";
import Map from "./components/Map";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material";
import About from "./components/About";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  const rootElement = document.getElementById("root");
  const theme = createTheme({
    typography: {
      fontFamily: ['"Sora", sans-serif'].join(","),
    },
    palette: {
      primary: {
        main: "#FF6978",
      },
      secondary: {
        main: "#340068",
      },
    },
    components: {
      MuiDialog: {
        defaultProps: {
          container: rootElement,
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <Home />
            <Services />
            <Map></Map>
            <About></About>
            <Footer></Footer>
          </div>

          <ButtonGradient />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
