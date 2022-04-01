import { useEffect, useState } from "react";
import { skills, tools } from "../../service/data";
import { Buttons, Card, Container, Content } from "./style";
interface Types {
  id: number;
  img: string;
  name: string;
}

export function Skills() {
  const skillData = skills;
  const toolData = tools;

  const [skillChange, setSkillChange] = useState(true);
  const [skill, setSkill] = useState<Types[]>([]);
  const [tool, setTool] = useState<Types[]>([]);

  useEffect(() => {
    setSkill(skillData);
    setTool(toolData);
  }, [skillData, toolData]);

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
              {skill.map((skill) => (
                <div className="skills" key={skill.id}>
                  <img src={skill.img} alt={skill.name} />
                  <p className="name">{skill.name}</p>
                </div>
              ))}
            </Card>
          </Content>
        ) : (
          <Content data-aos="fade-down" data-aos-easing="linear">
             <Card>
              {tool.map((skill) => (
                <div className="skills" key={skill.id}>
                  <img src={skill.img} alt={skill.name} />
                  <p className="name">{skill.name}</p>
                </div>
              ))}
            </Card>
          </Content>
        )}
      </Container>
    </>
  );
}
