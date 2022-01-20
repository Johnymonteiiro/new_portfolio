import { useEffect } from "react";
import { useContact } from "../../hooks/useContext";
import { Container, Content, Fields, Form } from "./style";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export function Contact() {
  const {
    name,
    email,
    subject,
    message,
    handleName,
    handleEmail,
    handleSubject,
    handleMesaage,
    sendEmail,
  } = useContact();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".animateForm", {
      scrollTrigger: {
        trigger: ".animateForm",
        start: "150px 90%",
        toggleActions: "restart pause none pause",
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });

    gsap.from(".animateForm", {
      scrollTrigger: {
        trigger: ".animateForm",
        start: "150px 100%",
        toggleActions: "restart pause none pause",
      },
      y: -150,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <Container id="contacts">
        <Content>
          <h1 className="title">Contact</h1>
          <p className="description">
            Interested in some projects?
            <br />
            Let´s connect via e-mail or linkedin
          </p>
          <Form onSubmit={sendEmail} className="animateForm">
            <Fields>
              <div className="input-area">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleName}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  value={email}
                  onChange={handleEmail}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  value={subject}
                  onChange={handleSubject}
                />
              </div>
              <div className="text-area">
                <textarea
                  name="message"
                  placeholder="let your message"
                  value={message}
                  onChange={handleMesaage}
                ></textarea>
              </div>
            </Fields>
            <button type="submit">Send</button>
          </Form>
        </Content>
      </Container>
    </>
  );
}
