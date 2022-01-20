import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  max-width: 1170px;
  margin: 0 auto;
  padding: 60px 20px;
  height: 100%;
`;

export const Content = styled.div`
  margin-bottom: 50px;

  .title {
    text-align: center;
    color: var(--second-color);
    font-size: var(--subtitle-size);
  }

  .description {
    text-align: center;
    font-size: var(--text-size);
    padding: 30px 0;
    line-height: 35px;
  }
`;

export const Card = styled.div`
  display: grid;
  height: 100%;
  margin-top: 80px;
  grid-template-columns: repeat(2, minmax(230px, 1fr));
  gap:50px;

  img {
    width: 100%;
    height: 300px;

    &:hover {
      transform: scale(1.004);
    }
  }

  @media only screen and (max-width: 908px){
     grid-template-columns: repeat(1, minmax(230px, 1fr));
     padding: 0 100px;
  }

  @media only screen and (max-width: 700px){
     padding: 0 50px;
  }

  
  @media only screen and (max-width: 600px){
     padding: 0;
  }
 
`;

export const Bg = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    181.17deg,
    rgba(0, 0, 0, 0.79) -3.06%,
    rgba(0, 0, 0, 0.88) -3.06%,
    rgba(34, 39, 49, 0.47) -3.06%,
    rgba(34, 39, 49, 0.94) 70.47%,
    #222731 81.33%,
    #222731 89.33%
  );
  
  &:hover {
    display: none;
  }

  .review {
    position: relative;
    left:0;
    top: 0px;
    width: 180px;
    color: var(--second-color);

    .revie-title {
      background: var(--third-color);
      padding: 10px 0;
      text-align: center;
      font-weight: 500;
    }

    .technologys {
      margin: 20px 0;

      .languages {
        display: flex;
        align-items: center;
        padding: 5px 0;
      }

      .icon {
        color: var(--third-color);
        margin-right: 10px;
      }
    }
  }
`;

export const Info = styled.div`
  background: var(--dark-light);
  height:100%;
  position: relative;
  transition: all 0.5s ease-in-out;

  &:hover ${Bg} {
    display: none;
  }

  &:hover {
    transform: translateY(5px);
  }

  .btn-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;

    .btn {
      padding: 6px 20px;
      background-color: var(--third-color);
      border-radius: 8px;
      color: var(--second-color);
      margin: 0 10px;
      transition: all 0.4s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

`;
