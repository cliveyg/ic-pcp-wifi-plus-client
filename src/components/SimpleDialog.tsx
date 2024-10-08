import * as React from 'react';
//import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
//import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

interface Wifi {
    bssid: string;
    ssid: string;
    flags: string;
}

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    wifis: Wifi[];
    onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Available WiFi Networks</DialogTitle>
            <List sx={{ pt: 0 }}>
                {props.wifis.map((wifi) => (
                    <ListItem disableGutters key={wifi}>
                        <ListItemButton onClick={() => handleListItemClick(wifi.ssid)}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={wifi.ssid} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}


