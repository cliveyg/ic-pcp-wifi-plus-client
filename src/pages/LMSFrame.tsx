import * as React from 'react'
//import { MuiThemeProvider } from '@mui/material/styles'
//import darkTheme from './../theme';
//import Paper from '@mui/material/Paper'
//import {Button} from "@mui/material";

export default function LMSFrame() {
    document.title = 'icPlayer | home'
    const windowWidth = React.useRef(window.innerWidth);
    const windowHeight = React.useRef(window.innerHeight);

    return (
        <div className="iframe">
            <iframe width={windowWidth.current}
                    height={windowHeight.current -50 }
                    src="http://icplayer.local:9000"
                    title="Lyrion Music Server" >
            </iframe>
        </div>
            )
}