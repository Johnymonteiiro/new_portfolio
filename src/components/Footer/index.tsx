import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { AiFillInstagram  } from "react-icons/ai";
import { Contacts, Container, Social, Wrapper } from "./styles";

export function Footer() {


  return (
    <Wrapper>
      <Container>
        <Contacts>
           <p className="phone">+55 85981155875</p>
           <p className="email">johnymonteiiro@gmail.com</p>
        </Contacts>
        <Social>
          <div className="icons">
              <a href="https://github.com/Johnymonteiiro">
                <FaGithub size={30} className="icon"/>
              </a> 
              <a href="https://www.linkedin.com/in/joao-sebastiao/">
                <FaLinkedin size={30} className="icon"/>
              </a> 
              <a href="https://www.linkedin.com/in/joao-sebastiao/">
                <AiFillInstagram size={35} className="icon"/>
              </a> 
          </div>
          <div className="copyright">
            <MdCopyright /> <span className="copyRight">2022 JohnyMonteiro</span>
          </div>
        </Social>
     </Container>
    </Wrapper>
     
  );
}
