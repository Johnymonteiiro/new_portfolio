import { Container, TopButton, Wrapper } from "./style";
import { BsArrowUpSquareFill } from "react-icons/bs";
import Logo from "../../assets/logo.svg";
import { NavBar } from "../NavBar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variante } from "../Animations/animations";


export function Header() {
  const [header, setHeader] = useState(false);
  const [top, setTop] = useState(false);

  const changeHeader = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }

    if (window.scrollY >= 2768) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);

    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  return (
    <Wrapper changeBackgound={header}>
      <Container>
        <motion.div
          className="logo_area"
          initial="out"
          animate="init"
          exit="out"
          variants={variante}
          transition={{
            delay: 0.4,
            stiffness: 50,
            type: "spring",
            duration: 1,
          }}
        >
          <img src={Logo} alt="jhony" />
          <h1 className="title">Jhony Monteiro</h1>
        </motion.div>
        <NavBar />
      </Container>
       {top ? (
           <TopButton href="#home">
           <BsArrowUpSquareFill size={30} color="#8257E5"/>
         </TopButton>
       ):(
         <></>
       )}
    </Wrapper>
  );
}
