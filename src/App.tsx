import './App.css'
import WifiPlusPage from "./pages/WifiPlusPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PCPFrame from "./pages/PCPFrame";
import DrawerMenu from "./components/DrawerMenu";
import * as React from "react";
import LMSFrame from "./pages/LMSFrame";

function App() {

    const windowWidth = React.useRef(window.innerWidth);
    const windowHeight = React.useRef(window.innerHeight);

  return (
      <BrowserRouter>
          <DrawerMenu />
          <Routes>
              <Route path="/wp" element={<WifiPlusPage width={windowWidth.current} height={windowHeight.current}/>}/>
              <Route path="/" element={<LMSFrame width={windowWidth.current} height={windowHeight.current} />}/>
              <Route path="pcp" element={<PCPFrame width={windowWidth.current} height={windowHeight.current} />}/>
              <Route path="/*" element={<LMSFrame width={windowWidth.current} height={windowHeight.current} />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
