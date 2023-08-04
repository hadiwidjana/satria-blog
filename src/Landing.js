import React, {useEffect} from "react";
import Granim from "granim";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import SelfPortrait from "./resources/SelfPortrait-bw.png";


export default function Landing({
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


    return (
        <>
            <canvas id='canvas-basic'/>
            <Box className='self-portrait' src={SelfPortrait} component="img"/>
            <Box className='main-title'>
                <Typography variant='h1' textAlign='left' fontWeight='bold' color='white'>I'm Satria</Typography>
                <Box className='sub-title'>
                    <Typography variant='h1' textAlign='left' color='primary' fontWeight='bold'>Test Automation</Typography>
                    <Typography variant='h1' textAlign='left' fontWeight='bold' color='white'>Engineer</Typography>
                </Box>
            </Box>
            <Box className='snapScrollDown' >
                <Typography variant="subtitle2" color='white' textAlign='center'>Scoll down to read my profile</Typography>
                <ArrowCircleDownIcon sx={{mx: 'auto', display: 'flex', color: 'white'}}/>
            </Box>
        </>
    )
}