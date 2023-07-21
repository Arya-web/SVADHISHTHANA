import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Footer,
  Home,
  Mission,
  Nav,
  Plan,
  Problems,
  Solution,
  Team,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
                <About />
                <Problems />
                <Mission />
                <Solution />
                <Plan />
                <Team />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
