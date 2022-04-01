import { useEffect } from "react";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Projects } from "../components/projects";
import { Skills } from "../components/Skills";
import { ContactProvider } from "../hooks/useContext";
import { RoutesLink } from "../routes/routes";
import Aos from "aos";
import 'aos/dist/aos.css'

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
