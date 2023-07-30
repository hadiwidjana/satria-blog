import React from 'react';
import { IconButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './config/color-context';

export default function SubHeaderNavigation() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box
            sx={{
            }}
        >
            {/*{theme.palette.mode} mode*/}
            <IconButton
                onClick={colorMode.toggleColorMode}
                color='primary'
            >
                {theme.palette.mode === 'dark' ? (
                    <Brightness7Icon/>
                ) : (
                    <Brightness4Icon/>
                )}
            </IconButton>
        </Box>
    );
}