import '../App.css'
import * as React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
//import {Button} from "@mui/material";
//import BigButton from "../components/BigButton";
//import DrawerMenu from "../components/DrawerMenu";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

type Props = {
    width: string;
};

const HomePage = (props: Props) => {
    document.title = 'icPlayer | home'
    //const windowWidth = React.useRef(window.innerWidth);
    //console.log(windowWidth.current)

    //const windowHeight = React.useRef(window.innerHeight);

    return (
        <div className="bingo">
            blah blah { props.width }
        </div>
    )
};



export default HomePage;

