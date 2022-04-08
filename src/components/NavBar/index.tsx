import { useState } from "react";
import { Container } from "./styles";
import { MenuItems } from "./menuItems";

import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { variante } from "../Animations/animations";

export function NavBar() {
  const [ismobile, setIsMobile] = useState(false);

  return (
    <Container>
      <nav className="navBarItems">
        <motion.div
          initial="out"
          animate="init"
          exit="out"
          variants={variante}
          transition={{
            delay: 0.5,
            stiffness: 50,
            type: "spring",
            duration: 1,
          }}
          className="menu-icon"
          onClick={() => setIsMobile(!ismobile)}
        >
          {ismobile ? (
            <VscChromeClose size={30} color="#E1E1E6" />
          ) : (
            <BiMenuAltRight size={30} color="#E1E1E6" />
          )}
        </motion.div>
        <ul className={ismobile ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a href={items.url} className={items.className}>
                  <motion.p
                    initial="out"
                    animate="init"
                    exit="out"
                    variants={variante}
                    transition={{
                      delay: 0.5,
                      stiffness: 50,
                      type: "spring",
                      duration: 1,
                    }}
                    onClick={() => setIsMobile(!ismobile)}
                  >
                    {items.title}
                  </motion.p>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
}
