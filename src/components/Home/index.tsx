import { Bg, Container, Content, Img, Info, Link } from "./style";
import { MdWavingHand } from "react-icons/md";
import Picture from "../../assets/home-image.png";
import { motion } from "framer-motion";
import { variante } from "../Animations/animations";

export function Home() {
  return (
    <>
      <Container id="home">
        <Content url={Picture}>
          <Bg></Bg>
          <Info>
            <motion.div
              className="greeting"
              initial="out"
              animate="init"
              exit="out"
              variants={variante}
              transition={{
                delay: 0.6,
                stiffness: 50,
                type: "spring",
                duration: 1,
              }}
            >
              <p>Hi, there, I`m</p>
              <span>Jhony Monteiro</span>
              <MdWavingHand size={18} color="yellow" />
            </motion.div>
            <motion.h1
              className="title"
              initial={{
                opacity: 0,
                y: "-5vw",
              }}
              animate="init"
              exit="out"
              variants={variante}
              transition={{
                delay: 0.8,
                stiffness: 50,
                type: "spring",
                duration: 1,
              }}
            >
              Front-end developer
              <br />& UI Designer
            </motion.h1>
            <motion.p
              className="description"
              initial={{
                opacity: 0,
                y: "-2vw",
              }}
              animate="init"
              exit="out"
              variants={variante}
              transition={{
                delay: 1,
                stiffness: 50,
                type: "spring",
                duration: 1,
              }}
            >
              I bring solutions and make easy the
              <br />
              life of people through the codes lines
            </motion.p>

            <motion.div
              className="btn-area"
              initial={{
                opacity: 0,
                y: "-2vw",
              }}
              animate="init"
              exit="out"
              variants={variante}
              transition={{
                delay: 1.2,
                stiffness: 50,
                type: "spring",
                duration: 1,
              }}
            >
              <Link href="#projects" className="btn-1">
                View my work
              </Link>
              <Link href="#about" className="btn-2">
                More about me
              </Link>
            </motion.div>
          </Info>
          <Img>
            <motion.img
              src={Picture}
              alt="jhony"
              initial={{
                opacity: 0,
                y: "-2vw",
              }}
              animate="init"
              exit="out"
              variants={variante}
              transition={{
                delay: 1.3,
                stiffness: 50,
                type: "spring",
                duration: 1,
              }}
            />
          </Img>
        </Content>
      </Container>
    </>
  );
}
