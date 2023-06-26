import * as React from "react";
import Box from "@mui/material/Box";

import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import Add from "./components/Add";

import { Stack } from "@mui/material";
import DarkModeBtn from "./components/DarkModeBtn";

function App() {
  return (
    <Box sx={{ minWidth: "400px" }}>
      <NavBar />
      <Stack
        direction={"row"}
        maxWidth={"79rem"}
        justifyContent={"space-around"}
        margin={"auto"}
      >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
      <DarkModeBtn />
    </Box>
  );
}

export default App;
