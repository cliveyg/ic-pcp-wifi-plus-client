import * as React from "react";
import {Button, Box, Card, CardContent} from "@mui/material";
import 'typeface-varela-round'
import request from 'superagent';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from '@mui/material/CircularProgress';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import WifiIcon from '@mui/icons-material/Wifi';
import CheckIcon from '@mui/icons-material/Check';

const WifiScan = () => {

    const [open, setOpen] = React.useState(false);
    const [wifis, setWifis] = React.useState([]);
    const [loading, setLoading] = React.useState(false);


    function getScanData(bl) {
        console.log("SCANNNNNNING..........")
        console.log(window.location)

        setLoading(bl);
        let serv = window["globalWPURL"] + '/wifi/scan'

        request.get(serv)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .then(res => {
                console.log(res.body)
                handleClickOpen(res.body.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    React.useEffect(() => {

        getScanData(true);
        const interval = setInterval(() => {
            getScanData(false);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleClickOpen = (wifis) => {
        setOpen(true);
        setLoading(false);
        setWifis(wifis)
    };

    const autoJoin = (known) => {
        alert("autoJoin")
        console.log("This is where we switch wifi networks")
        console.log("Known is ["+known+"]")
        return (event: React.MouseEvent) => {
            event.preventDefault();
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {loading ? (
                <div className="centered">
                    <CircularProgress />
                </div>
            ) : (
                <table>
                    <tbody>
                        {wifis.map((wifi, index) => {
                            if (window["currentWifi"] === wifi.ssid) {
                                return (<tr key={index}><td><WifiIcon sx={{ color: '#349369'}} fontSize="small" /></td><td className="scandeets"><div className="mL">{wifi.ssid}</div></td><td><div className="mL"><CheckIcon sx={{ color: '#349369'}} fontSize="small" /></div></td></tr>);
                            } else {
                                return (<tr key={index}><td><WifiIcon sx={{ color: '#131212'}} fontSize="small" /></td><td className="scandeets"><div onClick={() => {autoJoin(wifi.known)}} className="mL">{wifi.ssid}</div></td></tr>);
                            }
                        })}
                    </tbody>
                </table>
            )}
        </>
    )
};

export default WifiScan;