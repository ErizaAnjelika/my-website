import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Education } from "./component/Education";
import { Experience } from "./component/Experience";
import { Footer } from "./component/Footer";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { Skills } from "./component/Skills";
import { Work } from "./component/Work";

function App() {
  return (
    <>
      <Navbar />
      <div id="Home">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Work">
        <Work />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
