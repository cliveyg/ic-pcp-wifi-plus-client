import { useState } from 'react'
import './App.css'
import TestPage from "./pages/TestPage";
//import {RestorePage} from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PCPFrame from "./pages/PCPFrame";
import DrawerMenu from "./components/DrawerMenu";
import * as React from "react";
import LMSFrame from "./pages/LMSFrame";


function App() {
  //const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <div className="top-button">
              <DrawerMenu />
          </div>
          <Routes>
              <Route path="/" element={<TestPage/>}/>
              <Route path="lms" element={<LMSFrame/>}/>
              <Route path="pcp" element={<PCPFrame/>}/>
              <Route path="*" element={<TestPage/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
