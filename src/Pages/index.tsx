import { useEffect } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ContactProvider } from "../hooks/useContext";
import { RoutesLink } from "../Routes/routes";
import Aos from "aos";
import 'aos/dist/aos.css';

export function Main() {

  useEffect(()=>{
     Aos.init({duration:1000})
  },[])

  return (
    <>
      <ContactProvider>
        <RoutesLink />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ContactProvider>
    </>
  );
}
