import { createTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

declare module "@mui/material/styles/createTheme" {
    interface Theme {
        palette: {
            primary: {
                main: string,
            },
            secondary: {
                main: string,
            },
            text: {
                secondary: string,
            },
        },
        typography: {
            body1: {
                fontSize: string,
            },
            button: {
                textTransform: string,
            }
        },
        appBar: {
            background: {
                main: string
            }
        }
    }
    interface ThemeOptions  {
        appBar?: {
            background?: {
                main?: string,
            }
        }  // optional
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#EA0909",
        },
        secondary: {
            main: "#494C5D",
        },
        text: {
            secondary: grey["900"],
        },
    },
    typography: {
        body1: {
            fontSize: '13px',
        },
        button: {
            textTransform: 'none',
        }
    },
    appBar: {
        background: {
            main: grey["400"]
        }
    }
});

export {theme}