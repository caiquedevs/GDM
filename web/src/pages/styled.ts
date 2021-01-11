import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding-bottom: 50px;
  padding-left: 27px;
  padding-right: 27px;
`;

export const Header = styled.header`
  width: 100%;
  height: auto;
  padding-top: 55px;
  padding-bottom: 40px;

  figure {
    width: 100%;
    height: auto;
    margin-left: -50px;

    display: flex;
    align-items: center;
    justify-content: center;

    figcaption {
      margin-left: 32px;
      margin-top: 6px;
      font-family: Ubuntu;
      font-size: 25px;
      color: #9a9a9a;

      &::before {
        content: '';
        width: 1px;
        height: 32px;

        display: flex;
        background: #dedede;

        position: absolute;
        left: -15px;
        top: -2px;
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 767px) {
    figure {
      margin-left: 0px;
    }
  }
`;

export const ContainerBtnRegisterDoctor = styled.section`
  width: 100%;
  height: 88px;
  padding-right: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e8e8e8;
  border-radius: 5px;

  button {
    width: 350px;
    height: 50px;
    margin: 0 auto;

    border: none;
    background: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Ubuntu;
    font-weight: bold;
    font-size: 20px;
    color: #d1d1d1;
    cursor: pointer;
    transition: 0.2s all;

    svg {
      color: #c6c6c6;
      font-size: 27px;
      margin-left: 13px;
      transition: 0.2s all;
    }

    :hover {
      color: #57a4ff;
    }

    :hover svg {
      color: #04e000;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 767px) {
    padding-right: 0px;
  }
`;

export const List = styled.ul`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  list-style: none;
`;

export const ListItem = styled.li`
  width: 100%;
  height: auto;
  padding: 20px 80px 20px 0px;

  display: flex;
  align-items: center;

  & + li {
    border-top: 2px solid #eeeeee;
  }

  svg {
    color: #a5cfff;
    font-size: 33px;
    margin-right: 20px;
  }

  div.text-group {
    display: flex;
    flex-direction: column;

    span {
      font-family: Roboto;
      font-weight: bold;
      font-size: 17px;
      color: #444444;
      margin-bottom: 3px;
    }

    small {
      font-family: Roboto;
      font-weight: normal;
      font-size: 17px;
      color: #7b7b7b;

      text-transform: lowercase;
    }
  }

  div.text-group:nth-child(2) {
    min-width: 220px;
    max-width: 220px;
    margin-right: 20px;
  }

  @media screen and (min-width: 0px) and (max-width: 767px) {
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 20px 0;

    div.text-group:nth-child(2) {
      min-width: 80%;
      max-width: 80%;
      margin-right: 0px;
    }

    div.text-group:nth-child(3) {
      padding-left: 48px;
    }

    svg {
      margin-top: -1px;
      margin-right: 15px;
      margin-bottom: 20px;
    }
  }
`;

export const BtnEdit = styled.button`
  width: auto;
  height: auto;

  position: absolute;
  right: 30px;

  border: none;
  background: none;
  transition: 0.2s all;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }

  svg {
    margin: 0;
    font-size: 30px;
  }

  @media screen and (min-width: 0px) and (max-width: 767px) {
    right: 10px;
  }
`;
