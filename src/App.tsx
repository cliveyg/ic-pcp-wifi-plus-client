import { useState } from 'react'
import './App.css'
import WifiPlusPage from "./pages/WifiPlusPage";
//import {RestorePage} from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PCPFrame from "./pages/PCPFrame";
import DrawerMenu from "./components/DrawerMenu";
import * as React from "react";
import LMSFrame from "./pages/LMSFrame";


function App() {
  //const [count, setCount] = useState(0)

    const windowWidth = React.useRef(window.innerWidth);
    const windowHeight = React.useRef(window.innerHeight);

  return (
      <BrowserRouter>
          <DrawerMenu />
          <Routes>
              <Route path="/" element={<WifiPlusPage width={windowWidth.current} height={windowHeight.current}/>}/>
              <Route path="lms" element={<LMSFrame />}/>
              <Route path="pcp" element={<PCPFrame />}/>
              <Route path="/*" element={<WifiPlusPage width={windowWidth.current} height={windowHeight.current}/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
