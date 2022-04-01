import styled from "styled-components";

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 50px 20px;
  height: 75vh;

  @media only screen and (max-width: 820px) {
    height: auto;
  }
`;

export const Content = styled.div`
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

export const Form = styled.form`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  button {
    margin: 20px 0;
    padding: 10px 20px;
    width: 100px;
    background: var(--third-color);
    color: var(--second-color);
    font-size: var(--text-small-size);
    border-radius: 8px;
    border: none;
    transition: all 0.4s ease-in-out;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media only screen and (max-width: 820px) {
    text-align: center;
  }
`;

export const Fields = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;

  p {
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠ ";
    margin-bottom: 8px;
  }

  .input-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 30px;

    input {
      padding: 10px 10px;
      margin: 10px 0;
      border: 1.8px solid var(--third-color);
      background: var(--dark-light);
      color: var(--second-color);
      font-size: var(--text-small-size);
      border-radius: 8px;
      width: 100%;
    }

    label {
      color: var(--third-color);
      font-weight: 500;
      margin-top: 10px;
    }
  }

  .text-area {
    flex: 1;
    height: 270px;

    textarea {
      height: 173px;
      width: 100%;
      padding: 10px 10px;
      margin-top: 14px;
      border: 1.5px solid var(--third-color);
      background: var(--dark-light);
      color: var(--second-color);
      font-size: var(--text-small-size);
      border-radius: 8px;
      outline: none;
      font-family: var(--font-family);
    }

    label {
      color: var(--third-color);
      font-weight: 500;
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    max-width: 500px;
    .input-area,
    .text-area {
      margin-right: 0;
      width: 100%;

      label {
        display: flex;
        justify-content: left;
      }
    }

    .text-area {
      margin-top: 10px;
    }
  }
`;
