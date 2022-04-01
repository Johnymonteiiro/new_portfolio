import * as yup from 'yup';

export const userShema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),

});

interface ValidationsProps {
      name:string,
      email:string,
      subject:string,
      message:string
 }

 interface ErrorProps {
      name:string,
      email:string,
      subject:string,
      message:string
 }

export function ValidationFields (values: ValidationsProps){

     let error = {} as ErrorProps;

     if(!values.name){
         error.name = "The name is required"
     }
     if(!values.email){
        error.email = "The email is required"
    }
    if(!values.subject){
        error.subject = "The subject is required"
    }
    if(!values.message){
        error.message = "The message is required"
    }
    
    return error;
}