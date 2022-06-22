import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export default function CustomizedButtons({
  children,
  bgColor,
  color,
  borderColor,
  width,
}) {
  const BaseButton = styled(Button)({
    width: width,
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    fontWeight: "bold",
    padding: "12px 16px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "transparent",
    borderColor: "white",
    color: "white",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <BaseButton variant="contained" disableRipple>
      {children}
    </BaseButton>
  );
}
