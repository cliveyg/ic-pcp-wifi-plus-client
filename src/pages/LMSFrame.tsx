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
            <iframe width={windowWidth.current}
                    height={windowHeight.current}
                    src="http://icplayer.local:9000"
                    title="GeeksforGeeks" >
            </iframe>
            )
}