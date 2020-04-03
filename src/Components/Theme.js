import  { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    typography: {
        "fontFamily": "SFProDisplay-BlackItalic",
        "fontSize": 20,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});