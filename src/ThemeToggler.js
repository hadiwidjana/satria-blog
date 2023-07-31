import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './config/color-context';

export default function ThemeToggler() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box
            sx={{
                m: 5
            }}
        >

            <IconButton
                onClick={colorMode.toggleColorMode}
                color='primary'
            >
                {theme.palette.mode === 'dark' ? (
                    <>
                        <Typography variant='button' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            {theme.palette.mode} mode
                        </Typography>
                        <Brightness7Icon />
                    </>
                ) : (
                    <>
                        <Typography variant='button' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            {theme.palette.mode} mode
                        </Typography>
                        <Brightness4Icon />
                    </>
                )}
            </IconButton>
        </Box>
    );
}