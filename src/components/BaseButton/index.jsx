import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export default function CustomizedButtons({ children }) {
  const BaseButton = styled(Button)({
    width: "100%",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    fontWeight: "bold",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#e50914",
    borderColor: "#e50914",
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
      backgroundColor: "#e50914",
      borderColor: "#e50914",
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
