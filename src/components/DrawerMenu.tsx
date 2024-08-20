import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from "react-router-dom";
//import InboxIcon from '@mui/icons-material/MoveToInbox';
import SpeakerIcon from '@mui/icons-material/Speaker';
//import MailIcon from '@mui/icons-material/Mail';
import WifiIcon from '@mui/icons-material/Wifi';
//import BigButton from "./BigButton";
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';

const BigBButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    height: "20px",
    width: "400px",
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export default function DrawerMenu() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key='LMS' disablePadding>
                    <NavLink to="lms">
                        <ListItemButton>
                            <ListItemIcon>
                                <SpeakerIcon />
                            </ListItemIcon>
                            <ListItemText primary='LMS' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key='WifiPlus' disablePadding>
                    <NavLink to="/">
                        <ListItemButton>
                            <ListItemIcon>
                                <WifiIcon />
                            </ListItemIcon>
                            <ListItemText primary='WifiPlus' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key='piCorePlayer' disablePadding>
                    <NavLink to="pcp">
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary='piCorePlayer' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <BigBButton onClick={toggleDrawer(true)}>touch me!</BigBButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}