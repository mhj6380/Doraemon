import React from "react";
import styled from "styled-components";
import LoginTextField from "../form/LoginTextField";
import SubmitButton from "../form/SubmitButton";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ViewWrapper>
      <LoginFormWrapper>
        <Title>Login</Title>
        <LoginTextField
          label="username"
          type="text"
          val={username}
          setVal={setUsername}
        />
        <LoginTextField
          label="password"
          type="password"
          val={password}
          setVal={setPassword}
        />
        <CheckboxWrapper>
          <label htmlFor="longsession">
            로그인 유지
            <input id="longsession" type="checkbox" />
          </label>
        </CheckboxWrapper>
        <SubmitButton text="로그인" />
        <ForgotPassword>
          <Link to="/auth/find/password">비밀번호를 잊으셨나요?</Link>
        </ForgotPassword>
        <NoAccount>
          계정이 없으신가요? <Link to="/auth/join">회원가입</Link>
        </NoAccount>
      </LoginFormWrapper>
    </ViewWrapper>
  );
};
const Title = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 700;
`;
const ViewWrapper = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10px;
  background: #ededed;
`;
const LoginFormWrapper = styled.div`
  position: relative;
  width: 500px;
  height: auto;
  background: white;
  border-radius: 5px;
  padding: 60px 25px;
  @media (min-width: 768px) {
    padding: 80px 40px;
  }
  @media (min-width: 1024px) {
    padding: 90px 60px;
  }
`;

const NoAccount = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: -35px;
  left: 0;
`;

const CheckboxWrapper = styled.div`
  font-size: 14px;
  input {
    margin-left: 6px;
    position: relative;
    top: 2px;
  }
`;

const ForgotPassword = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;
export default LoginForm;
