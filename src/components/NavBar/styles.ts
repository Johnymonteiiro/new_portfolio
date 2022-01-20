import styled from "styled-components";

export const Container = styled.div`
  .navBarItems {
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-menu {
      display: grid;
      grid-template-columns: repeat(5, auto);
      grid-gap: 20px;
    }

    .nav-link {
      color: var(--gray-color);
      font-size: var(--text-size);
      transition: all 0.4s ease-in-out;

      &:hover {
        color: var(--second-color);
      }
    }

    .menu-icon {
      display: none;
    }

    @media only screen and (max-width: 820px) {
      .navBarItems {
        position: relative;
      }

      .nav-menu {

        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 500px;
        position: fixed;
        opacity: 0;
        top:-100%;
        left: 0;
        transition: all 0.8s ease;
        border-radius: 0 0 10px 10px;
        background: var(--dark-color);

      }

      .nav-menu.active {
        background: var(--dark-color);
        opacity: 1;
        top: 0;
        transition: all 0.8s ease;
        z-index: 1500;
      }

      .nav-link {
        text-align: center;
        color: var(--second-color);
        font-weight: 500;
        font-size: var(--text-size);
        &:hover {
          color: var(--third-color);
        }
      }

      .menu-icon {
        display: block;
        position: fixed;
        right:25px;
        cursor: pointer;
        transform: translate(-100%, 60%);
        z-index: 1550;
      }
    }
  }
`;

export const Button = styled.button``;
