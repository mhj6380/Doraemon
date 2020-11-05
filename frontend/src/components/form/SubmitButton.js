import React from "react";
import styled from "styled-components";

const SubmitButton = (props) => {
  const { text } = props;
  return <SubmitBtn>{text}</SubmitBtn>;
};

const SubmitBtn = styled.button`
  box-shadow: none;
  border: none;
  width: 100%;
  line-height: 45px;
  background: #0abab5;
  color: #fff;
  font-size: 16px;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media (min-width: 1024px) {
    line-height: 50px;
    font-size: 18px;
  }
`;

export default SubmitButton;
