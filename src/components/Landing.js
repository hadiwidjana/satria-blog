import React, {useEffect, useMemo, useRef, useState} from "react";
import Granim from "granim";
import Box from "@mui/material/Box";
import {Grow, Typography} from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import SelfPortrait from "../resources/SelfPortrait-bw.png";


export default function Landing({
                                    scrollto,
                                    goToSectionRef,
                                }) {

    const refLanding = useRef(null);
    const isInViewport = useIsInViewport(refLanding);

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
            {/*<Box className='self-portrait' src={SelfPortrait} component="img"/>*/}
            <Box className='main-title' ref={refLanding}>
                <Grow
                    in={isInViewport}
                    style={{transformOrigin: '0 0 0'}}
                    {...(isInViewport ? {timeout: 1000} : {})}>
                    <Typography variant='h1' textAlign='left' fontWeight='bold' color='white'>Hello, I'm
                        Satria</Typography>
                </Grow>

                <Box className='sub-title'>
                    <Grow
                        in={isInViewport}
                        style={{transformOrigin: '0 0 0'}}
                        {...(isInViewport ? {timeout: 2000} : {})}>
                        <Typography variant='h1' textAlign='left' color='primary' fontWeight='bold'>Test
                            Automation Engineer</Typography>
                    </Grow>
                    {/*<Grow*/}
                    {/*    in={isInViewport}*/}
                    {/*    style={{transformOrigin: '0 0 0'}}*/}
                    {/*    {...(isInViewport ? {timeout: 3000} : {})}>*/}
                    {/*    <Typography variant='h1' textAlign='left' fontWeight='bold' color='white'>Engineer</Typography>*/}
                    {/*</Grow>*/}
                </Box>

            </Box>
            <Box className='snapScrollDown'>
                <Typography variant="subtitle2" color='white' textAlign='center'>Scoll down to read my
                    profile</Typography>
                <ArrowCircleDownIcon sx={{mx: 'auto', display: 'flex', color: 'white'}}/>
            </Box>
        </>
    )
}


function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            ),
        [],
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}