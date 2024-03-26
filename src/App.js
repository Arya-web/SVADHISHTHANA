import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Nav,
  FakeNav,
  Home,
  About,
  // Problems,
  // Mission,
  // Solution,
  // Plan,
  Team,
  Footer,
  WhyUs,
  Process,
  Products,
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <FakeNav />
                <Home />
                <About />
                {/* <Problems /> */}
                {/* <Mission /> */}
                {/* <Solution /> */}
                {/* <Plan /> */}
                <WhyUs />
                <Process />
                <Team />
                <Footer />
                {/* <NotFound /> */}
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Products />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
