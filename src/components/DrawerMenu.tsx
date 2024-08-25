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
//import { styled } from '@mui/material/styles';
//import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';


export default function DrawerMenu() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

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
        //window.removeEventListener('resize', handleResize)
        window.addEventListener('resize', handleResize)
    })

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key='LMS' disablePadding>
                    <NavLink to="/">
                        <ListItemButton>
                            <ListItemIcon>
                                <SpeakerIcon />
                            </ListItemIcon>
                            <ListItemText
                                primaryTypographyProps={{
                                    color: '#0c0202',
                                }}
                                primary='LMS' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key='WifiPlus' disablePadding>
                    <NavLink to="/wp">
                        <ListItemButton>
                            <ListItemIcon>
                                <WifiIcon />
                            </ListItemIcon>
                            <ListItemText
                                primaryTypographyProps={{
                                    color: '#0c0202',
                                }}
                                primary='WifiPlus' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key='piCorePlayer' disablePadding>
                    <NavLink to="pcp">
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText
                                primaryTypographyProps={{
                                    color: '#0c0202',
                                }}
                                primary='piCorePlayer' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} sx={{ height: 34, width: dimensions.width, borderRadius: 0, border: 0 }} variant="outlined"><WidgetsIcon /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}