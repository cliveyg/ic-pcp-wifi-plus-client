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

const ICSwitcher = () => {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    function switcher() {
        setLoading(true);
        let serv = window["globalWPURL"] + '/wifiplus/switcher'
        request.get(serv)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .timeout(2000)
            .then(res => {
                handleClickOpen(res.body.data)
            })
            .catch(err => {
                console.log(err)
                let data = "Switching in progress..."
                handleClickOpen(data)
            })

    }

    const handleClickOpen = (data) => {
        setOpen(true);
        setLoading(false);
        setData(data)
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(function(){
            window.location.reload()
        },3000);
    };

    let buttText = "unknown"
    let dt = "unknown"
    console.log("playerMode is ["+window["playerMode"]+"]")
    if (window["playerMode"] == "wap") {
        buttText = "Switch To Wifi Mode"
        dt = "Changing to Wifi"
    } else if (window["playerMode"] == "wifi") {
        buttText = "Switch To WAP Mode"
        dt = "Changing to WAP"
    }
    
    return (
        <>
            <Box sx={{ padding: 1, justifyContent: 'center', backgroundColor: 'inherit', width: 'inherit' }}>
                <Button onClick={switcher} variant="contained" sx={{ width: '100%' }}>{buttText}</Button>
            </Box>
            {loading ? (
                <div className="centered">
                    <CircularProgress />
                </div>
            ) : (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{ fontSize: 16 }}>{dt}</DialogTitle>
                    <DialogContent>
                        <div>
                            <DialogContentText sx={{ fontSize: 14 }}>{data}</DialogContentText>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} sx={{ fontSize: 16 }} color="primary" autoFocus>
                            ok
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    )
};

export default ICSwitcher;