import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useGetData } from "../../api/useGetData";

export const ListOfProducts = () => {
  const [textFieldData, setTextFieldData] = useState("");
  const data = useGetData();
  console.log(data);

  return (
    <TextField
      id="standard-basic"
      label="Standard"
      variant="standard"
      value={textFieldData}
      onChange={(e) => {
        setTextFieldData(e.currentTarget.value);
      }}
    />
  );
};
