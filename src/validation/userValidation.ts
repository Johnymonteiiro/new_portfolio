import * as yup from 'yup';

export const userShema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),

});