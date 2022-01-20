import { useEffect, useState } from "react";
import { FaRegEye, FaGithub } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { Link } from "react-router-dom";
import { projectsData } from "../../service/api";
import { Bg, Card, Container, Content, Info } from "./style";

interface LanguageTypes {
  id: number;
  name: string;
}

interface Types {
  id: number;
  img: string;
  title: string;
  github: string;
  link: string;
  languages: LanguageTypes[];
}

export function Projects() {
  const data = projectsData;
  const [projects, setProjects] = useState<Types[]>([]);

  useEffect(() => {
    setProjects(data);
  }, [data]);

  return (
    <>
      <Container id="projects">
        <Content>
          <h1 className="title">Projects</h1>
          <p className="description">
            Digital Products (Aplications, sites and web solutions)
            <br />
            responsive, visually pleasing, user-centric and easy to use
          </p>
          <Card>
            {projects.map((project) => (
              <Info key={project.id}>
                <Link to="/">
                  <img src={project.img} alt={project.title} />
                </Link>
                <div className="btn-area">
                    <a target="_blank" href={project.link} className="btn" rel="noreferrer">
                      <FaRegEye size={20} />
                    </a>
                    <a target="_blank" href={project.github} className="btn" rel="noreferrer">
                       <FaGithub size={20} />
                    </a>
                </div>
                <Bg>
                  <div className="review">
                    <div className="revie-title">
                      <span className="number">{project.id}</span>
                      <span className="title-project">
                        {"." + project.title}
                      </span>
                    </div>
                    <div className="technologys">
                      {project.languages.map((language) => (
                        <div key={language.id} className="languages">
                          <SiCodepen size={20} className="icon" />
                          <p>{language.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Bg>
              </Info>
            ))}
          </Card>
        </Content>
      </Container>
    </>
  );
}
