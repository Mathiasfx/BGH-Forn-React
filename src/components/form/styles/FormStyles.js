import styled from "styled-components";

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

    & options {
      font-weight: bold;
      color: green !important;
    }
  }

  && .FormContainer_option li {
    padding-left: 1.5rem;
    font-weight: bold;
    color: green;
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
  }

  && .FormContainer_checkCard {
    width: 298px;
    height: 75px;
    background: #fefefe;
    border: 1px solid #a2a9cc;
    box-sizing: border-box;
    box-shadow: 0px 10px 25px rgba(162, 169, 204, 0.25);
    border-radius: 12px;
  }
`;
