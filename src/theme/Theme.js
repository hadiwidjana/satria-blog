import { grey, common } from '@mui/material/colors';

const palette = {
    light: {
        primary: {
            main: grey[200],
            light: grey[200],
            dark: grey[900],
        },
    },
};

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: palette.light.primary.main,
                    light: palette.light.primary.light,
                    dark: palette.light.primary.dark,
                },

                divider: grey[800],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                primary: grey,
                divider: grey[700],
                background: {
                    default: grey[900],
                    paper: grey[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});

export const getThemedComponents = (mode) => ({
    components: {
        ...(mode === 'light'
            ? {
                MuiAppBar: {
                    styleOverrides: {
                        colorPrimary: {
                            backgroundColor: grey[800],
                        },
                    },
                },
                MuiLink: {
                    variant: 'h3',
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            color: common.white,
                        },
                    },
                    variants: [
                        {
                            props: { variant: 'contained' },
                            style: {
                            },
                        },
                        {
                            props: { variant: 'outlined' },
                            style: {
                                color: palette.light.primary.main,
                            },
                        },
                        {
                            props: { variant: 'primary', color: 'primary' },
                            style: {
                                border: '4px dashed',
                            },
                        },
                    ],
                },
                MuiList: {
                    styleOverrides: {
                        root: {},
                    },
                },
                MuiMenuItem: {
                    styleOverrides: {
                        root: {
                            color: common.white,
                            alignItems: 'stretch',
                        },
                    },
                },
                MuiAccordion: {
                    styleOverrides: {
                        root: {
                            color: common.white,
                        },
                    },
                },
            }
            : {
                MuiAppBar: {
                    styleOverrides: {
                        colorPrimary: {
                        },
                    },
                },
            }),
    },
});