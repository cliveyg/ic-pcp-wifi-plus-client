import * as React from 'react'
import BasicTabs from "../components/BasicTabs";
//import { MuiThemeProvider } from '@mui/material/styles'
//import darkTheme from './../theme';
//import Paper from '@mui/material/Paper'
//import {Button} from "@mui/material";
import '../App.css'

export default function HomePage() {


    document.title = 'icPlayer | home'

    return (
        <div className="iframe">
        <BasicTabs />
        </div>
            )
}