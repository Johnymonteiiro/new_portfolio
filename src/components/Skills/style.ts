import styled from 'styled-components'
import { motion } from "framer-motion";



export const Container = styled(motion.div)`
    max-width: 1170px;
    margin:0 auto;
    padding:50px 20px;
    height: 70vh;

    .title{
        text-align: center;
        color: var(--second-color);
        font-size: var(--subtitle-size);
    }

    @media only screen and (max-width: 570px){
        height:100%;
        margin: 40px 0;
    }

`;

export const Content = styled(motion.div)`

   .skills{

       text-align: center;
       background: var(--dark-light);
       border-radius: 10px;
       padding: 20px 0;

       img{
           width: 50px;
           height: 50px;
       }

       .name{
           color: var(--second-color);
           padding: 8px 0;
       }
   }
`;

export const Buttons = styled.div`
 
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 50px auto;
 background: var( --dark-light);
 width:250px;
 height: 50px;
 border-radius: 165px;

 .btn{

    padding: 15px 50px;
    border: none;
    background-color:var(--third-color);
    border-radius: 165px;
    font-size:var(--text-small-size);
    color:var(--second-color);

 }

 .disabled-btn{
    padding: 18px 30px;
    border: none;
    background-color:transparent;
    border-radius: 165px;
    font-size:var(--text-small-size);
    color:var(--gray-color);

 }

`;

export const Card = styled(motion.div)`
   display: grid;
   grid-template-columns: repeat(3,150px);
   gap: 30px;
   width: 520px;
   margin:0 auto;

   @media only screen and (max-width: 570px){
    grid-template-columns: repeat(2,100px);
    width: 100%;
    height:auto;
    justify-content: center;
   }
`;