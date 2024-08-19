import * as React from 'react'
//import { MuiThemeProvider } from '@mui/material/styles'
//import darkTheme from './../theme';
//import Paper from '@mui/material/Paper'
//import {Button} from "@mui/material";

export default function PCPFrame() {
    document.title = 'icPlayer | home'
    const windowWidth = React.useRef(window.innerWidth);
    const windowHeight = React.useRef(window.innerHeight);


    return (
            <iframe width="500"
                    height="500"
                    src="http://icplayer.local/cgi-bin/main.cgi"
                    title="GeeksforGeeks" >
            </iframe>
            )
}