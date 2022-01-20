import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { userShema } from "../validation/userValidation";
import { SetStateAction, useState } from "react";


interface ContextProps {
   name:string,
   email:string,
   subject:string,
   message:string,
   handleName:(e: { target: { value: SetStateAction<string> } })=> void,
   handleEmail:(e: { target: { value: SetStateAction<string> } })=> void,
   handleSubject:(e: { target: { value: SetStateAction<string> } })=> void,
   handleMesaage:(e: { target: { value: SetStateAction<string> } })=> void,
   sendEmail:(e: React.FormEvent<HTMLFormElement>)=> void
}

interface ProviderProps {
  children:ReactNode;
}

const Contact = createContext<ContextProps>({} as ContextProps);


export function ContactProvider ({children} : ProviderProps) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setSetMesage] = useState("");
  
    function handleName(e: { target: { value: SetStateAction<string> } }) {
      setName(e.target.value);
    }
  
    function handleEmail(e: { target: { value: SetStateAction<string> } }) {
      setEmail(e.target.value);
    }
  
    function handleSubject(e: { target: { value: SetStateAction<string> } }) {
      setSubject(e.target.value);
    }
  
    function handleMesaage(e: { target: { value: SetStateAction<string> } }) {
      setSetMesage(e.target.value);
    }
  
    const emailVerrify = async () => {
      const isValid = await userShema.isValid(email);
      return isValid;
    };
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        
      e.preventDefault();
  
      emailVerrify();
  
      if (name === "" || email === "" || subject === "" || message === "") {
        toast.error("Fill the empy spaces");
      } else {
        emailjs
          .sendForm(
            "service_message",
            "template_m4w7j7g",
            e.currentTarget,
            "user_nCOldAK8DviTmu2rFHGFq"
          )
          .then(
            (result) => {
              console.log(result.text);
              toast.success("Your e-mail is sent!'");
            },
            (error) => {
              console.log(error.text);
              toast.error("Try again later");
            }
          );
  
        e.currentTarget.reset();
        setName("");
        setEmail("");
        setSubject("");
        setSetMesage("")
      }
    };


    return(
        <Contact.Provider value={{
            name,
            email,
            subject,
            message,
            handleName,
            handleEmail,
            handleSubject,
            handleMesaage,
            sendEmail,
        }}>

            {children}
        </Contact.Provider>
    )

}


export function useContact (){
    const context = useContext(Contact);

    return context;
}