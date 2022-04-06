/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaRegEye, FaGithub } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { Link } from "react-router-dom";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Bg, Card, Container, Content, Info } from "./style";

interface Technology {
  id: number;
  technology: string;
}

type ProjectTypes =
  | {
      id: string;
      title: string;
      data: {
        banner: string;
        technology: Technology[];
        preview: string;
        repository: string;
      };
    }[]
  | undefined;

export function Projects() {
  const [prismic, prismicDoc] = useAllPrismicDocumentsByType("posts");
  const [projects, setProjects] = useState<ProjectTypes>([] as ProjectTypes);

  const newprojects = prismic?.map((prismic) => {
    return {
      id: prismic.id,
      title: prismic.data.title.map((title: { text: string }) => title.text),

      data: {
        banner: prismic.data.banner.url,
        technology: prismic.data.info,
        preview: prismic.data.preview.url,
        repository: prismic.data.repository.url,
      },
    };
  });

  useEffect(() => {
    if (prismicDoc.state === "failed") {
      console.warn(
        "Blog post document was not found. Make sure it exists in your Prismic repository"
      );
    }
    setProjects(newprojects);
  }, [prismicDoc.state]);

  return (
    <>
      <Container id="projects">
        <Content>
          <h1 className="title">Projects</h1>
          <hr className="title_line" />
          <p className="description">
            Digital Products (Aplications, sites and web solutions)
            <br />
            responsive, visually pleasing, user-centric and easy to use
          </p>
          <Card>
            {projects?.map((project) => (
              <Info key={project.id}>
                <Link to="/">
                  <img src={project.data.banner} alt={project.title} />
                </Link>
                <div className="btn-area">
                  <a
                    target="_blank"
                    href={project.data.preview}
                    className="btn"
                    rel="noreferrer"
                  >
                    <FaRegEye size={20} />
                  </a>
                  <a
                    target="_blank"
                    href={project.data.repository}
                    className="btn"
                    rel="noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <Bg>
                  <div className="review">
                    <div className="review-title">
                      <p className="title-project">{project.title}</p>
                    </div>
                    <div className="technologys">
                      {project.data.technology.map((tech) => (
                        <div key={tech.technology} className="languages">
                          <SiCodepen size={20} className="icon" />
                          <p>{tech.technology}</p>
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
