import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components";

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
                <FakeNav />
                <Home />
                <About />
                <Problems />
                <Mission />
                <Solution />
                <Plan />
                <Team />
                <Footer />
                {/* <NotFound /> */}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
