import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { AiFillInstagram  } from "react-icons/ai";
import { useSinglePrismicDocument } from "@prismicio/react";
import { Contacts, Container, Social, Wrapper } from "./styles";
import { useEffect } from "react";


export function Footer() {

  const [prismic, prismicDoc] = useSinglePrismicDocument("contact");
  const contact = prismic?.data;
  
  useEffect(() => {
    if (prismicDoc.state === "failed") {
      console.warn("Contact session was not found");
    }
  }, [prismicDoc.state]);

  return (
    <Wrapper>
      <Container key={contact?.id}>
        <Contacts>
           <p className="phone">{contact?.number}</p>
           <p className="email">{contact?.email}</p>
        </Contacts>
        <Social>
          <div className="icons">
              <a href={contact?.github.url} target="_blank" rel="noreferrer">
                <FaGithub size={30} className="icon"/>
              </a> 
              <a href={contact?.linkedin.url} target="_blank" rel="noreferrer">
                <FaLinkedin size={30} className="icon"/>
              </a> 
              <a href={contact?.instagram.url} target="_blank" rel="noreferrer">
                <AiFillInstagram size={35} className="icon"/>
              </a> 
          </div>
          <div className="copyright">
            <MdCopyright /> <span className="copyRight">{contact?.copyright}</span>
          </div>
        </Social>
     </Container>
    </Wrapper>
     
  );
}
