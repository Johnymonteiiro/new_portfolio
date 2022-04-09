import styled from "styled-components";

interface HeaderTypes {
  changeBackgound:boolean;
}

export const Wrapper = styled.header<HeaderTypes>`
  width: 100%;
  height: 100px;
  padding: 30px 0;
  margin-top: -84px;
  position: fixed;
  z-index: 1500;
  transition: all 0.8s ease-in-out;
  border-bottom: ${props => props.changeBackgound ? "2px solid var(--third-color)" : "none"};
  filter: ${props => props.changeBackgound ? "blur(-2px)" : "blur(0px)"};
  background:${props => props.changeBackgound ? "var(--dark-color)":"trasparent"}; 
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo_area {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      margin: 0 10px;
    }

    .title {
      color: var(--second-color);
      font-size: var(--text-size);
    }
  }
`;

export const TopButton = styled.a`
position: absolute;
bottom:-78.5vh;
left: 88%;
color: white;
border-radius:10%;
transition: all .4s ease-in-out;
`;
