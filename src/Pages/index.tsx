import { useEffect } from "react";
import Aos from "aos";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ContactProvider } from "../hooks/useContext";
import { RoutesLink } from "../Routes/routes";

export function Main() {
  useEffect(()=>{
     Aos.init({duration:1500})
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
