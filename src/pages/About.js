import React, {useEffect, useMemo, useRef, useState} from "react";
import {Box, FormControlLabel, Switch, Typography, Zoom} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Landing from "../Landing";
import Tech from "../Tech";
import Work from "../Work";
import Education from "../Education";


const summary1 = 'Automation Test Engineer with an objective of creating robust testing frameworks. With some experience in Java, JavaScript, and TypeScript, I have honed my skills in crafting efficient and reliable testing solutions. '
const summary2 = 'Combining technical expertise with a passion for excellence, I am adept at automating complex test scenarios, ensuring seamless software quality assurance.'


export default function About({
                                  scrollto,
                                  goToSectionRef,
                              }) {

    const refAbout = useRef(null);
    const isInViewport1 = useIsInViewport(refAbout);


    return (

        <div className="container">
            <Box className='section' sx={{}} >
                <Landing/>
            </Box>
            <Box sx={{backgroundColor: 'primary.main'}} >
                <Box className='about-me' style={{overflow: 'none'}}>
                    <Grid container spacing={5} sx={{mx: 'auto'}} ref={refAbout}>
                        <Grid sx={12} lg={8}>
                            <Zoom in={isInViewport1} style={{transitionDelay: isInViewport1 ? '500ms' : '0ms'}}>
                                <Typography variant='h5' color='white' align='justify'>{summary1}</Typography>
                            </Zoom>
                        </Grid>
                        <Grid sx={12} lg={4}>
                            <Zoom in={isInViewport1} style={{transitionDelay: isInViewport1 ? '500ms' : '0ms'}}>
                                <Typography variant='body1' color='white' align='justify'>{summary2}</Typography>
                            </Zoom>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{pt:'10vh',pb:'10vh'}}  >
                <Tech />
            </Box>
            <Box  sx={{backgroundColor: 'primary.main',pt:'10vh',pb:'10vh'}}>
                <Work/>
            </Box>
            <Box sx={{pt:'10vh',pb:'10vh'}}  >
                <Education />
            </Box>
        </div>


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



