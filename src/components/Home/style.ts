import styled from "styled-components";

interface ContentType {
  url: string;
}

export const Container = styled.div`
  max-width: 1170px;
  height:100vh;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 80px;

  @media only screen and (max-width: 908px) {
    height: auto;
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
  background: linear-gradient(
    181.17deg,
    rgba(34, 39, 49, 0) -1.47%,
    rgba(34, 39, 49, 0.91) 95.47%,
    #222731 91.33%,
    #222731 99.33%
  );
`;

export const Content = styled.div<ContentType>`
  position: relative;
  top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media only screen and (max-width: 908px) {
    background: url(${(props) => props.url}) no-repeat;
    background-size: 60vw;
    background-position: center;
    top: 30px;
    justify-content: center;
    z-index:1;

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

  @media only screen and (max-width: 500px) {
    top: 0;
  }
`;

export const Info = styled.div`
  flex: 1.08;
  height: 30vh;
  z-index: 100;

  .greeting {
    display: flex;
    align-items: center;

    p {
      font-size: var(--text-size);
    }
    span {
      padding: 0 8px;
      font-size: var(--text-size);
      color: var(--third-color);
    }
  }

  .title {
    font-size: var(--title-size);
    color: var(--second-color);
    padding: 15px 0;
  }

  .description {
    padding-bottom: 20px;
    font-size: var(--text-size);
  }

  .btn-area {
    position: relative;
    top: 50px;

    .btn-1 {
      padding: 10px 25px;
      border-radius: 189px;
      margin-right: 30px;
      border: none;
      color: var(--second-color);
      background-color: var(--third-color);
      font-size: var(--text-small-size);

      &:hover {
        filter: brightness(0.9);
      }
    }

    .btn-2 {
      border: none;
      color: var(--third-color);
      background: transparent;
      font-size: var(--text-small-size);

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media only screen and (max-width: 908px) {
    display: flex;
    flex: 100%;
    align-items: center;
    flex-direction: column;
    text-align: center;

    .title {
      font-size: 6vw;
    }

  }

  @media only screen and (max-width: 500px) {
    .btn-area {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .btn-1 {
        margin: 0;
      }

      .btn-2 {
        margin-top: 20px;
      }
    }
    .title {
      font-size: 9vw;
    }
  }
`;

export const Img = styled.div`
  flex: 1;
  width: 500px;
  height: 600px;
  img {
    position: relative;
    left: 40px;
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
