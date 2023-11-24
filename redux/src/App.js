import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Education } from "./components/education";
import { Basic } from "./components/basic";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Viewall } from "./components/viewall";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <div className="row p-5 border-bottom">
          <div className="col-lg-4">
            <h3>Redux App</h3>
          </div>
          <div className="col-lg-8">
            <nav className="btn-group">
              <Link className="btn btn-primary" to="/">
                Baic Details
              </Link>
              <Link className="btn btn-secondary" to="/contact">
                Contact Details
              </Link>
              <Link className="btn btn-warning" to="/education">
                Education Details
              </Link>
              <Link className="btn btn-info" to="/experience">
                Experience Details
              </Link>
              <Link className="btn btn-danger" to="/viewall">
                Viewall Details
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col-lg-12 ">
          <Routes>
            <Route exact path="/" element={<Basic />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/viewall" element={<Viewall />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
