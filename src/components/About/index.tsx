import { useSinglePrismicDocument } from "@prismicio/react";
import { Container, Content, Img, Info, Social, Link, Bg } from "./style";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { useEffect } from "react";
import { PrismicText } from "@prismicio/react";

export function About() {
  
  const [prismic, prismicDoc] = useSinglePrismicDocument("about");
  const about = prismic?.data;

  useEffect(() => {
    if (prismicDoc.state === "failed") {
      console.warn("About session was not found");
    }
  }, [prismicDoc.state]);


  return (
    <>
      <Container>
        <h1 className="title" id="about">{about?.title}</h1>
        <hr className="title_line" />
        <Content
          url={about?.image.url}
          className="animateSection"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          <Img>
            <img src={about?.image.url} alt="jhony" />
          </Img>
          <Info>
            <div className="about">
              <p className="description">
                <PrismicText field={about?.content} />
              </p>
            </div>
          </Info>
          <Social>
            <hr className="line" />
            <div className="social">
              <Link target="_blank" href={about?.github.url}>
                <FaGithub size={30} className="icon" />
              </Link>
              <Link target="_blank" href={about?.linkedin.url}>
                <FaLinkedin size={30} className="icon" />
              </Link>
              <Link href={about?.resume.url}>
                <FaFilePdf size={30} className="icon" />
              </Link>
            </div>
            <hr className="line" />
          </Social>
          <Bg></Bg>
        </Content>
      </Container>
    </>
  );
}
