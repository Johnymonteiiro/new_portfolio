import { Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Home } from "../components/home";
import { Projects } from "../components/projects";
import { Skills } from "../components/Skills";


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