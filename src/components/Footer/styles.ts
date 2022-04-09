import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 820px){
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }
`;


export const Wrapper = styled.div`
    width: 100%;
    height: 15vh;
    border-top: 2px solid var(--third-color);
`;

export const Contacts = styled.div`
  
  font-size: var(--text-size);

  .phone{
    padding-bottom: 15px;
  }

`;

export const Social = styled.div`
   
  .icons{
    display: flex;
    align-items: center;
    justify-content: center;

    a:nth-child(2){
       margin: 0 15px;
    }
  }

  .icon{
      color: var(--third-color);
      transition: all .4s ease-in-out;
      cursor: pointer;

      &:hover{
          filter: brightness(0.6);
      }
  }

  .copyright{
      padding: 10px 0;
      font-size: var(--text-small-size);
  }

  
  @media only screen and (max-width: 820px){
    .icons{
      margin-top:20px;
    }
  }
`;