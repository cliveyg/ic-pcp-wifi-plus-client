import * as React from "react";
import '../App.css'
import Box from '@mui/material/Box';
import {red, blue, blueGrey} from '@mui/material/colors';
import {Button} from "@mui/material";

type Props = {
    width: number;
    height: number;
};

const PCPFrame = (props: Props) => {
    document.title = 'icPlayer | lms'
    const rr = blueGrey[500]
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    React.useEffect(() => {
        function handleResize() {
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.removeEventListener('resize', handleResize)
        window.addEventListener('resize', handleResize)
    })

    return (
        <div>
            <Box sx={{backgroundColor: rr, height: dimensions.height-34, width: dimensions.width}}>
                <div className="lms">
                    <iframe
                        width={dimensions.width}
                        height={dimensions.height-44}
                        src="http://icplayer.local/cgi-bin/main.cgi"
                        title="Lyrion Music Server" >
                    </iframe>
                </div>
            </Box>
        </div>
    )
};



export default PCPFrame;