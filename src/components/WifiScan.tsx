import * as React from "react";
import {Button, Box} from "@mui/material";
import 'typeface-varela-round'
import request from 'superagent';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from '@mui/material/CircularProgress';

const WifiScan = () => {

    const [open, setOpen] = React.useState(false);
    const [wifis, setWifis] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    function getItemData() {
        setLoading(true);
        request.get('http://icplayer.local:8020/wifi/scan')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .then(res => {
                handleClickOpen(res.body.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    //getItemData()
    const handleClickOpen = (wifis) => {
        setOpen(true);
        setLoading(false);
        setWifis(wifis)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ padding: 1, justifyContent: 'center', backgroundColor: 'inherit', width: 'inherit' }}>
                <Button onClick={getItemData} variant="contained" sx={{ width: '100%' }}>Scan Wifi Networks</Button>
            </Box>
            {loading ? (
                <div className="centered">
                    <CircularProgress />
                </div>
            ) : (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Networks Found</DialogTitle>
                    <DialogContent>
                        {wifis.map((wifi, index) => {
                            {console.log(wifi.ssid)}
                            return (
                                <div key={index}>
                                    <DialogContentText>{wifi.ssid}</DialogContentText>
                                </div>
                            );
                        })}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            ok
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    )
};

export default WifiScan;