import styled from "styled-components";

interface ContentType {
  url: string;
}

export const Container = styled.div`
  max-width: 1170px;
  height: 80vh;
  margin: 0 auto;
  padding: 0 20px;

  .title {
    
    text-align: center;
    color: var(--second-color);
    font-size: var(--subtitle-size);
  }

  @media only screen and (max-width: 908px) {
    height: 100%;
    margin: 80px auto;
  }
`;

export const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Content = styled.div<ContentType>`
  position: relative;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media only screen and (max-width: 908px) {
    flex-direction: column;
    background: url(${(props) => props.url}) no-repeat;
    background-size: 400px;
    background-position: center;
    top: 0;
    height: 100%;

    ${Bg} {
      background: linear-gradient(
        181.17deg,
        rgba(0, 0, 0, 0.79) -3.06%,
        rgba(0, 0, 0, 0.88) -3.06%,
        rgba(34, 39, 49, 0.47) -3.06%,
        rgba(34, 39, 49, 0.94) 70.47%,
        #222731 81.33%,
        #222731 89.33%
      );
    }
  }

  /* @media only screen and (max-width: 723px){
    background-size: 70vw;
  } */
`;

export const Info = styled.div`
  flex: 2;
  height: 30vh;

  .description {
    font-size: var(--text-size);
    line-height: 35px;
    width: 90%;
  }

  span {
    color: var(--third-color);
    padding-right: 8px;
  }

  @media only screen and (max-width: 908px) {
    display: flex;
    flex: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 1000;
    height: auto;

    .description {
      margin: 0 auto;
      padding: 15px 0;
      width: 80%;
    }
  }
`;

export const Img = styled.div`
  flex: 0.9;
  margin: 0 20px;
  height: 400px;

  img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 908px) {
    img {
      display: none;
    }
  }
`;

export const Link = styled.a``;

export const Social = styled.div`
  z-index: 100;
  .line {
    height: 4rem;
    width: 4px;
    border: none;
    background-color: var(--third-color);
  }

  .social {
    position: relative;
    right: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .icon {
      margin: 10px 0;
      color: var(--third-color);
      transition: all 0.4s ease-in-out;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  @media only screen and (max-width: 908px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;

    .social {
      right: 0;
      margin: 0 auto;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 150px;

      .icon {
        margin: 5px;
      }
    }

    .line {
      height: 4px;
      width: 40%;
    }
  }
`;
