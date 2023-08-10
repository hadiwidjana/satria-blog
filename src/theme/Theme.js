   import { grey, common } from '@mui/material/colors';

const palette = {
    // light: {
    //     primary: {
    //         main: grey[200],
    //         light: grey[200],
    //         dark: grey[900],
    //     },
    // },
};

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
//                 primary: {
//                     main: palette.light.primary.main,
//                     light: palette.light.primary.light,
//                     dark: palette.light.primary.dark,
//                 },

//                 divider: grey[800],
//                 text: {
//                     primary: grey[900],
//                     secondary: grey[800],
//                 },
//                 background: {
//                     default: grey[100]
//                 }
            }
            : {
//                 primary: grey,
//                 divider: grey[700],
//                 background: {
//                     default: grey[900],
//                     paper: grey[900],
//                 },
//                 text: {
//                     primary: '#fff',
//                     secondary: grey[500],
//                 },
            }),
    },
});

export const getThemedComponents = (mode) => ({
    components: {
        ...(mode === 'light'
            ? {
//                 MuiAppBar: {
//                     styleOverrides: {
//                         colorPrimary: {
//                             backgroundColor: grey[800],
//                         },
//                     },
//                 },
//                 MuiLink: {
//                     variant: 'h3',
//                 },
//                 MuiSelect: {
//                     styleOverrides: {
//                         root: {

//                         },
//                     },
//                     variants: [
//                         {
//                             props: { variant: 'select'},
//                             style: {
//                                 background: common.white
//                             }
//                         }
//                     ]
//                 },
//                 MuiInputBase: {
//                     styleOverrides: {
//                         root: {

//                         },
//                     },
//                     variants: [
//                         {
//                             props: { variant: 'input'},
//                             style: {
//                                 background: common.white
//                             }
//                         }
//                     ]
//                 },
//                 MuiOutlinedInput: {
//                     styleOverrides: {
//                         root: {

//                         },
//                     },
//                     variants: [
//                         {
//                             props: { variant: 'input'},
//                             style: {
//                                 background: common.white
//                             }
//                         }
//                     ]
//                 },
//                 MuiButton: {
//                     styleOverrides: {
//                         root: {
//                             color: common.black,
//                         },
//                     },
//                     variants: [
//                         {
//                             props: { variant: 'contained' },
//                             style: {
//                             },
//                         },
//                         {
//                             props: { variant: 'outlined' },
//                             style: {
//                                 color: 'black',
//                                 border: '1px solid #0000003b',
//                                 '&:hover': {
//                                     border: '1px solid black',
//                                 },
//                                 background: common.white
//                             },
//                         },
//                         {
//                             props: { variant: 'primary', color: 'black' },
//                             style: {
//                                 border: '4px dashed',
//                             },
//                         },
//                     ],
//                 },
//                 MuiList: {
//                     styleOverrides: {
//                         root: {},
//                     },
//                 },
//                 MuiMenuItem: {
//                     styleOverrides: {
//                         root: {
//                             color: common.white,
//                             alignItems: 'stretch',
//                         },
//                     },
//                 },
                // MuiAccordion: {
                //     styleOverrides: {
                //         root: {
                //             color: common.white,
                //         },
                //     },
                // },
            }
            : {
                // MuiAppBar: {
                //     styleOverrides: {
                //         colorPrimary: {
                //         },
                //     },
                // },
            }),
    },
});