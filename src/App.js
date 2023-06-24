import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Nav, Services } from "./components";

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
                <Services />
                <Contact />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
