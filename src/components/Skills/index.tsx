import { useEffect, useState } from "react";
import { skills, tools } from "../../service/api";
import { Buttons, Card, Container, Content } from "./style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  
  useEffect(() => {
     
    gsap.registerPlugin(ScrollTrigger)
     gsap.to(".animateCard",{
       scrollTrigger:{
         trigger:".animateCard",
         start:"100px 100%",
         toggleActions:"restart pause reverse pause"
       },
          y:0,
          opacity: 1,
          duration:1 
     })

     gsap.from(".animateCard",{
       scrollTrigger:{
         trigger:".animateCard",
         start:"100px 90%",
         toggleActions:"restart pause reverse pause"
       },
          y:-100,
          opacity: 0,
          duration:1 
     })

  }, []);

  return (
    <>
      <Container id="skills">
        
        <h1 className="title">Skills & Tools</h1>
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
          <Content className="animateCard">
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
          <Content className="animateCard">
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
