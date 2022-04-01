import { useEffect, useState } from "react";
import { useContact } from "../../hooks/useContext";
import { Container, Content, Fields, Form } from "./style";

export function Contact() {
  const { values,errors, handleChange, sendEmail, } = useContact();

  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isSubject, setIsSubject] = useState(true);
  const [isMessage, setIsMessage] = useState(true);

  useEffect(()=>{

    if(values.name === ""){
      setIsName(false)
    } else {
      setIsName(true)
    }

    if(values.email === ""){
      setIsEmail(false)
    } else {
      setIsEmail(true)
    }

    if(values.subject === ""){
      setIsSubject(false)
    } else {
      setIsSubject(true)
    }

    if(values.message === ""){
      setIsMessage(false)
    } else {
      setIsMessage(true)
    }

  },[values.email, values.message, values.name, values.subject])


  return (
    <>
      <Container id="contacts">
        <Content>
          <h1 className="title">Contact</h1>
          <hr className="title_line" />
          <p className="description">
            Interested in some projects?
            <br />
            Let´s connect via e-mail or linkedin
          </p>
          <Form onSubmit={sendEmail} >
            <Fields>
              <div className="input-area">
                <label> Name:</label>
                <input
                  type="text"
                  name ="name"
                  placeholder ="Name"
                  value={values.name}
                  onChange={handleChange}
                />
                {isName ?
                <>
                </> : <>
                {errors.name && <p>{errors.name}</p>}
                </> }
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder ="e-mail"
                  value={values.email}
                  onChange={handleChange}
                />
                {isEmail?
                <>
                </> : <>
                {errors.email && <p>{errors.email}</p>}
                </> }
                <label>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  placeholder ="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
                {isSubject ?
                <>
                </> : <>
                {errors.subject && <p>{errors.subject}</p>}
                </> }
              </div>
              <div className="text-area">
              <label>Message:</label>
                <textarea
                  name="message"
                  placeholder ="let your message"
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
                {isMessage ?
                <>
                </> : <>
                 {errors.message && <p>{errors.message}</p>}
                </> }
               
              </div>
            </Fields>
            <button type="submit">Send</button>
          </Form>
        </Content>
      </Container>
    </>
  );
}
