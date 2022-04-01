import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { AiFillInstagram  } from "react-icons/ai";
import { Contacts, Container, Social, Wrapper } from "./styles";
import { personalData } from "../../db/db";

export function Footer() {


  return (
    <Wrapper>
      <Container>
        <Contacts>
           <p className="phone">{personalData.number}</p>
           <p className="email">{personalData.email}</p>
        </Contacts>
        <Social>
          <div className="icons">
              <a href={personalData.github} target="_blank" rel="noreferrer">
                <FaGithub size={30} className="icon"/>
              </a> 
              <a href={personalData.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={30} className="icon"/>
              </a> 
              <a href={personalData.insta} target="_blank" rel="noreferrer">
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
