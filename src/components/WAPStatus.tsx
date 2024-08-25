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

const WAPStatus = () => {

    const [wap, setWAPStatus] = React.useState([]);
    const [state, setState] = React.useState('');

    function getWAPStatus() {

        setState('loading');
        request
            .get(window["globalWPURL"]+'/system/status')
            .then((res) => {
                setState('success');
                setWAPStatus(res.body.data);
            })
            .catch((err) => {
                setState('error');
            });
    }

    React.useEffect(() => {
        getWAPStatus()
    }, []);

    if (state === 'error') {
        console.log("BAD TINGS")
    }

    if (state === 'success') {
        console.log("GOOD TIDINGS")
    }

    return (
        <>
            {state === 'loading' ? (
                <div className="centered">
                    <CircularProgress />
                </div>
            ) : (
                <Box>
                    <Card sx={{ backgroundColor: '#18336c' }}>
                        <CardContent sx={{ fontSize: 14 }}>
                            <div className="wifi-deets"><WifiTetheringIcon fontSize="small" />&nbsp;&nbsp;blah</div>
                            <div className="">GLOBALwpURL is {window["globalWPURL"]}</div>
                        </CardContent>
                    </Card>
                </Box>
            )}
        </>
    )
};

export default WAPStatus;