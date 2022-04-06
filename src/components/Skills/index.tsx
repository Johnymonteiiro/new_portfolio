import { useEffect, useState } from "react";
import { useSinglePrismicDocument } from "@prismicio/react";
import { Buttons, Card, Container, Content } from "./style";
interface Types {
  id: number;
  image: {
    url: string;
  };
  title: string;
}

export function Skills() {
  const [prismic, prismicDoc] = useSinglePrismicDocument("skills_tools");
  const hability = prismic?.data;

  const skills = hability?.skills;

  const tools = hability?.tools;

  useEffect(() => {
    if (prismicDoc.state === "failed") {
      console.warn("About session was not found");
    }
  }, [prismicDoc.state]);

  const [skillChange, setSkillChange] = useState(true);

  function handleSkillChange() {
    setSkillChange(true);
  }

  function handleToolChange() {
    setSkillChange(false);
  }

  return (
    <>
      <Container id="skills">
        <h1 className="title">Skills & Tools</h1>
        <hr className="title_line" />
        <Buttons>
          <button
            className={skillChange ? "btn" : "disabled-btn"}
            onClick={handleSkillChange}
          >
            Skills
          </button>
          <button
            className={skillChange ? "disabled-btn" : "btn"}
            onClick={handleToolChange}
          >
            Tools
          </button>
        </Buttons>
        {skillChange ? (
          <Content data-aos="fade-down" data-aos-easing="linear">
            <Card>
              {skills?.map((skill: Types) => (
                <div className="skills" key={skill.title}>
                  <img src={skill.image.url} alt={skill.title} />
                  <p className="name">{skill.title}</p>
                </div>
              ))}
            </Card>
          </Content>
        ) : (
          <Content data-aos="fade-down" data-aos-easing="linear">
            <Card>
              {tools.map((tool: Types) => (
                <div className="skills" key={tool.title}>
                  <img src={tool.image.url} alt={tool.title} />
                  <p className="name">{tool.title}</p>
                </div>
              ))}
            </Card>
          </Content>
        )}
      </Container>
    </>
  );
}
