import { createContext, ReactNode, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { userShema, ValidationFields } from "../validation/userValidation";
import { useState } from "react";

interface ErrorProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValuesProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContextProps {
  values: ValuesProps;
  errors: ErrorProps;
  handleChange: (e: { target: { name: string; value: string } }) => void;
  sendEmail: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const Contact = createContext<ContextProps>({} as ContextProps);

export function ContactProvider({ children }: ProviderProps) {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "",});

  const resetValues = { name:"", email:"", subject:"", message:"", };

  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({} as ErrorProps);

  function handleChange(e: { target: { name: string; value: string } }) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  const dataFields = {
    name: values.name,
    email:values.email,
    subject: values.subject,
    message: values.message
  }

  const fieldVerrify = async () => {
    const isValid = await userShema.isValid(dataFields);
    return isValid;
  };

  useEffect(() => {
    if (
      values.name === "" ||
      values.email === "" ||
      values.subject === "" ||
      values.message === ""
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [values]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fieldVerrify();

    if (isValid) {
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
      setValues({
        ...resetValues,
      });
    } else {
      setErrors(ValidationFields(values));
    }
  };

  return (
    <Contact.Provider
      value={{
        handleChange,
        sendEmail,
        values,
        errors,
      }}
    >
      {children}
    </Contact.Provider>
  );
}

export function useContact() {
  const context = useContext(Contact);
  return context;
}
