import { Container, Content, Img, Info, Social, Link, Bg } from "./style";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import Picture from "../../assets/about-image.png";
import { personalData } from "../../db/db";


export function About() {
  
 
  return (
    <>
      <Container id="about" >
        <h1 className="title">About me</h1>
        <hr className="title_line" />
        <Content 
        url={Picture}
         className="animateSection"
         data-aos="fade-down" data-aos-easing="linear"
         >
          <Img>
            <img src={Picture} alt="jhony" />
          </Img>
          <Info>
            <div className="about">
              <p className="description">
                Make yourself home, I`m Jhony Monteiro front-end developer. I`ve
                got experience with Html5, Css3 and <span>Javascript</span>,
                <span>Typescript</span>
                languages. Now I`m working with <span>React.js</span>and{" "}
                <span>Next.js</span>mostly projects that I`ve built.
                <br />
                I`m social one, open to talk and bring new ideias, work as time
                with my workmates. I like to learn things that make me growth as
                profissional, I`m in love with technology, music and football.
                <br /> I only need one chance to prove my skills and I promise,
                you will not get disaponted.
              </p>
            </div>
          </Info>
          <Social>
            <hr className="line" />
            <div className="social">
              <Link target="_blank" href={personalData.github}>
                <FaGithub size={30} className="icon" />
              </Link>
              <Link
                target="_blank"
                href={personalData.linkedin}
              >
                <FaLinkedin size={30} className="icon" />
              </Link>
              <Link href={personalData.resume}>
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
