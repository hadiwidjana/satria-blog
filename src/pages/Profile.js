import React, { useEffect } from "react";
import Granim from "granim";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Fade, Typography } from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


export default function Profile({
    scrollto,
    goToSectionRef,
}) {

    useEffect(() => {
        new Granim({
            element: '#canvas-basic',
            direction: 'left-right',
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ['#000000', '#595959'],
                        ['#7D7D7D', '#4A4A4A'],
                        ['#242424', '#525252'],
                        ['#888888', '#4A4A4A'],
                    ],
                    transitionSpeed: 2000
                }
            }
        });
    }, [])


    return <>
        <canvas id='canvas-basic' />
        <Box className='snapScrollDown' onClick={() => scrollto(goToSectionRef)}>
            <Typography variant="subtitle2" color='white' textAlign='center'>Scoll down to read my blog articles</Typography>
            <ArrowCircleDownIcon sx={{ mx: 'auto', display: 'flex', color: 'white' }} />
        </Box>
    </>
}