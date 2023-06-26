import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
    shape: {
      borderRadius: 4, // Set the desired border radius value
    },
    navHover: {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  darkTheme: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
  },
});
