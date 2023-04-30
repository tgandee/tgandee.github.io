import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { darkStyles, mode } from "./components/styles";

const darkModeTheme = createTheme(darkStyles);

function App() {
  const lightModeTheme = useTheme();

  var date = new Date();
  if (date.getHours() > 18) {
  }

  return (
    <ThemeProvider theme={mode === "dark" ? darkModeTheme : lightModeTheme}>
      <CssBaseline />
      <Box container sx={{ display: "flex" }}>
        <Navbar />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
