import React, {useState} from 'react';
import { IconButton, Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../config/color-context';
import './ThemeToggler.css';
import {blue} from "@mui/material/colors";

export default function ThemeToggler() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [value, setValue] = React.useState(false);

    const handleToggle= () => {
        setValue(!value)
        colorMode.toggleColorMode()
    }



    return (
        <Box>
            <input
                checked={value}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: value && blue[200] }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
              {theme.palette.mode === 'dark' ? (
                <span className={`react-switch-button`}>
                    <Brightness4Icon color='primary' fontSize='small' sx={{display:'block', mx:'auto', mt:'5px'}}/>
                </span>
                  ) : (

                  <span className={`react-switch-button`}>
                    <Brightness7Icon color='primary' fontSize='small' sx={{display:'block', mx:'auto', mt:'5px'}}/>
                </span>
                      )}

                  </label>

                  </Box>
    );
}