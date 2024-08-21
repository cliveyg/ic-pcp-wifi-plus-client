import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

//const darkTheme = createTheme({
//    palette: {
//        mode: 'dark',
//    },
//});

// A custom theme for this app
const theme = createTheme({
    typography: {
        // Use the system font.
        fontFamily:
            '"Varela Round",'+
            '-apple-system,system-ui,BlinkMacSystemFont,' +
            '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
        fontSize: 16,
    },
    palette: {
        primary: {
            main: '#090101',
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