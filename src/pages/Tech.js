import React, {useEffect, useMemo, useRef, useState} from "react";
import {Grow, Paper, Slide, styled, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DataObjectIcon from '@mui/icons-material/DataObject';
import Grid from '@mui/material/Unstable_Grid2';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AutoModeIcon from '@mui/icons-material/AutoMode';


const CardContentCustom = styled(CardContent)(`
  padding: 3rem;
  &:last-child {
    padding-bottom: 3rem;
  }
`);

const pl = (
    <React.Fragment>
        <CardContentCustom sx={{marginTop: '20%'}}>
            <Typography align='center'><CodeIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Programming Language</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Java, JavaScript, TypeScript</Typography>
        </CardContentCustom>
    </React.Fragment>
);

const fe = (
    <React.Fragment>
        <CardContentCustom sx={{marginTop: '20%'}}>
            <Typography align='center'><DevicesIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Front End</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Selenium, Cypress, Playwright,
                Appium</Typography>
        </CardContentCustom>
    </React.Fragment>
);

const be = (
    <React.Fragment>
        <CardContentCustom sx={{marginTop: '20%'}}>
            <Typography align='center'><DataObjectIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Back End</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Supertest, RestAssured, Postman</Typography>
        </CardContentCustom>
    </React.Fragment>
);

const lt = (
    <React.Fragment>
        <CardContentCustom sx={{marginTop: '20%'}}>
            <Typography align='center'><CloudDoneIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Load Testing</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>JMeter</Typography>
        </CardContentCustom>
    </React.Fragment>
);
const ci = (
    <React.Fragment>
        <CardContentCustom sx={{marginTop: '20%'}}>
            <Typography align='center'><AutoModeIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>CI</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Jenkins, Github Action, Gitlab
                CI/CD</Typography>
        </CardContentCustom>
    </React.Fragment>
);

const it = (
    <React.Fragment>
        <CardContentCustom sx={{marginTop: '20%'}}>
            <Typography align='center'><HomeRepairServiceIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Integration</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Allure, Jira, Google API, Firebase, Apache POI,
                and many more..</Typography>
        </CardContentCustom>
    </React.Fragment>
);

export default function Tech({
                                 scrollto,
                                 goToSectionRef,
                             }) {

    const refTech1 = useRef(null);
    const isInViewport1 = useIsInViewport(refTech1);
    const refTech2 = useRef(null);
    const isInViewport2 = useIsInViewport(refTech2);
    const refTech3 = useRef(null);
    const isInViewport3 = useIsInViewport(refTech3);
    const refTech4 = useRef(null);
    const isInViewport4 = useIsInViewport(refTech4);
    const refTech5 = useRef(null);
    const isInViewport5 = useIsInViewport(refTech5);
    const refTech6 = useRef(null);
    const isInViewport6 = useIsInViewport(refTech6);
    const containerRef = React.useRef(null);


    return (
        <Paper className='tech-stack' elevation={5} style={{overflow: 'none'}}>
            <Typography variant='h4' align='center' fontWeight='bold' sx={{margin: '2rem'}}>Tech Stack</Typography>
            {/*<Grid container spacing={2} sx={{mt: '1rem'}}>*/}
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{minHeight: '20vh'}}
                overflow='hidden'
            >
                <Grid xs={12} sm={6} md={4} lg={3} ref={refTech1} className='tech-grid'>
                    <Grow in={isInViewport1} style={{transitionDelay: isInViewport1 ? '500ms' : '0ms'}}>
                    <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{pl}</Card>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3} ref={refTech2} className='tech-grid'>
                    <Grow in={isInViewport2} style={{transitionDelay: isInViewport2 ? '500ms' : '0ms'}}>
                        <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{fe}</Card>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3} ref={refTech3} className='tech-grid'>
                    <Grow in={isInViewport3} style={{transitionDelay: isInViewport3 ? '500ms' : '0ms'}}>
                        <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{be}</Card>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3} ref={refTech4} className='tech-grid'>
                    <Grow in={isInViewport4} style={{transitionDelay: isInViewport4 ? '500ms' : '0ms'}}>
                        <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{lt}</Card>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}  ref={refTech5} className='tech-grid'>
                    <Grow in={isInViewport5} container={refTech5.current} style={{transitionDelay: isInViewport5 ? '500ms' : '0ms'}}>
                        <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{ci}</Card>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}  ref={refTech6} className='tech-grid'>
                    <Grow in={isInViewport6} style={{transitionDelay: isInViewport6 ? '500ms' : '0ms'}}>
                        <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{it}</Card>
                    </Grow>
                </Grid>
            </Grid>
        </Paper>

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