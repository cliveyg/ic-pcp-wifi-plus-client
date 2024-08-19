import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

//const darkTheme = createTheme({
//    palette: {
//        mode: 'dark',
//    },
//});

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#e26936',
        },
        secondary: {
            main: '#13796d',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;