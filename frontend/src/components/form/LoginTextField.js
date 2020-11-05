import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

const LoginTextField = (props) => {
  const { label, type, val, setVal } = props;
  return (
    <FieldWrapper>
      <TextField
        label={label}
        fullWidth
        value={val}
        type={type}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </FieldWrapper>
  );
};

const FieldWrapper = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
`;
export default LoginTextField;
