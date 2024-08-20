import '../App.css'
import * as React from "react";
//import {Button} from "@mui/material";
//import BigButton from "../components/BigButton";
import DrawerMenu from "../components/DrawerMenu";

export default function HomePage() {

    document.title = 'icPlayer | home'
    const windowWidth = React.useRef(window.innerWidth);
    const windowHeight = React.useRef(window.innerHeight);

    return (
        <div className="iframe">
            <iframe width={windowWidth.current}
                    height={windowHeight.current -50 }
                    src="https://www.football365.com/"
                    title="reddit" >
            </iframe>
        </div>
    )
}