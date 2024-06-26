import React from "react";

import { TextField, type TextFieldProps } from "@mui/material";

const InputText: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      id="outlined-basic"
      {...props}
      variant="outlined"
      style={{ width: "100%" }}
    />
  );
};

export default InputText;
