import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <Box container sx={{ display: 'flex' }}>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
