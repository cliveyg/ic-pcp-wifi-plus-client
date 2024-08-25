import * as React from "react";
import {Button, Box} from "@mui/material";
import 'typeface-varela-round'
import request from 'superagent';
/*
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
 */
import WifiIcon from '@mui/icons-material/Wifi';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import WifiScan from "./WifiScan";
import ICSwitcher from "./ICSwitcher";
import WAPStatus from "./WAPStatus";

const AppSwitcher = () => {

    const [wifi, setWifiStatus] = React.useState([]);
    const [state, setState] = React.useState('');

    function getWifiStatus() {

        setState('loading');
        request
            .get('http://icplayer.local:8020/wpa/status')
            .then((res) => {
                console.log("GOT STATUS!!!")
                setState('success');
                setWifiStatus(res.body.data);
            })
            .catch((err) => {
                console.log("NOT GOT STATUS _+_+_+_")
                console.log(err)
                setState('error');
            });
    }


    React.useEffect(() => {
        getWifiStatus()
    }, []);

    if (state === 'error') {
        console.log("SETTING TO WAP")
        window["playerMode"] = "wap"
        window["globalWPURL"] = "http://10.10.10.1:8020"
        window["globalLMSURL"] = "http://10.10.10.1:9000"
        window["globalPCPURL"] = "http://10.10.10.1/cgi-bin/main.cgi"
    }

    if (state === 'success') {
        console.log("SETTING TO WIFI")
        window["playerMode"] = "wifi"
        window["currentWifi"] = wifi["ssid"]
        window["globalWPURL"] = "http://icplayer.local:8020"
        window["globalLMSURL"] = "http://icplayer.local:9000"
        window["globalPCPURL"] = "http://icplayer.local/cgi-bin/main.cgi"
    }

    return (
        <>
            {state === 'loading' ? (
                <div className="centered">
                    <CircularProgress />
                </div>
            ) : (
                <Box>
                    <Card sx={{ backgroundColor: '#6a7fab' }}>
                        <CardContent sx={{ fontSize: 14 }}>
                            {state === 'error' ? (
                                <div className="wifi-deets"><WifiTetheringIcon fontSize="small" />&nbsp;&nbsp;Running in ap mode</div>
                            ) : (
                                <div className="wifi-deets"><WifiIcon fontSize="small" />&nbsp;&nbsp;{wifi["ssid"]}</div>
                            )}
                            <div className="">GLOBALwpURL is {window["globalWPURL"]}</div>
                        </CardContent>
                    </Card>
                </Box>
            )}
            { window["playerMode"] === "wifi" ? (
                <>
                    <ICSwitcher />
                    <Box>
                        <Card>
                            <CardContent>
                                <WifiScan />
                            </CardContent>
                        </Card>
                    </Box>
                </>
            ) : window["playerMode"] === "wap" ? (
                <>
                    <WAPStatus />
                    <ICSwitcher />
                </>
            ) : (
                <>
                    <div>playerMode not set</div>
                </>
            )}
        </>
    )
};

export default AppSwitcher;