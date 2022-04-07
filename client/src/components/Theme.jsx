import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    "-1": "#F6F6F4",
    "0": "#EDEDE9",
    "1": "#D6CCC2",
    "2": "#E3D5CA",
    "3": "#E3D5CA",
    "4": "#D5BDAF",
    "5": "#CEB2A1",
    "6": "#C7A794",
    "7": "#B8907A"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;