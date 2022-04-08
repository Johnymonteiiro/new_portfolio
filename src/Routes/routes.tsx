import { Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Home } from "../components/Home";


export const RoutesLink = () => {

  const location = useLocation();
  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
    </>
  );
};