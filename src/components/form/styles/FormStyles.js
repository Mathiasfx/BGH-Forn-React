import styled from "styled-components";

//Versiones Mobile y Desktop
export const desktopStartWidth = 814;
export const tabletStartWidth = 1024;
export const mobile = `@media (max-width: ${desktopStartWidth}px)`;
export const tablet = `@media (max-width: ${tabletStartWidth}px)`;

export const FormContainer = styled.div`
  width: 100%;
  padding-bottom: 100px;
  && .FormContainer_select {
    width: 56%;
    height: 64px;
    background: #fefefe;
    border: 1px solid #11216c;
    box-sizing: border-box;
    border-radius: 12px;
    filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.1));

    ${tablet} {
      width: 100%;
    }

    ${mobile} {
      width: 100%;
    }
  }

  && .FormContainer_option {
    padding-left: 1.5rem;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 16px;
    background-color: #fefefe;
  }

  && .FormContainer_label {
    margin-top: 1rem;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #596394;
  }

  && .FormContainer_textarea {
    margin-top: 1rem;
    width: 56%;
    height: 110px;
    background: #fefefe;
    border: 1px solid #a2a9cc;
    box-sizing: border-box;
    border-radius: 12px;
    filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.1));

    ${tablet} {
      width: 100%;
    }

    ${mobile} {
      width: 100%;
    }
  }

  && .FormContainer_textarea::placeholder {
    color: #a2a9cc;
    font-size: 1.2em;
    align-items: center;

    text-align: center;
  }

  && .FormContainer_submit {
    background: #00918f;
    border-radius: 15px;
    width: 300px;
    height: 55px;
    color: #fff;
    border: none;
    text-decoration: none;
  }

  && .FormContainer_checkContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    width: 56%;
    margin-bottom: 2rem;

    ${tablet} {
      width: 100%;
      grid-template-columns: 1fr;
    }

    ${mobile} {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }

  && .FormContainer_checkCard {
    width: 298px !important;
    height: 75px !important;
    background: #fefefe !important;
    border: 1px solid #a2a9cc !important;
    box-sizing: border-box !important;
    box-shadow: 0px 10px 25px rgba(162, 169, 204, 0.25) !important;
    border-radius: 12px !important;
  }
`;
