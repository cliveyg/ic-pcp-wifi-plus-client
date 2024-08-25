import * as React from "react";
import '../App.css'
import Box from '@mui/material/Box';
import WifiScan from "../components/WifiScan";
import AppSwitcher from "../components/AppSwitcher";
import ICSwitcher from "../components/ICSwitcher";
import WAPStatus from "../components/WAPStatus";

const WifiPlusPage = () => {
    document.title = 'icPlayer | wifiplus'

    const rr = '#19866b'
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
            <Box sx={{ backgroundColor: rr, height: dimensions.height-34, width: dimensions.width }}>
                <AppSwitcher />
            </Box>
        </div>
    )
};

export default WifiPlusPage;