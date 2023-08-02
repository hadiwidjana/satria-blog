import React from "react";
import {Paper, styled, Typography} from "@mui/material";
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
        <CardContentCustom sx={{maxHeight: 'fit-content'}}>
            <Typography align='center'><CodeIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Programming Language</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Java, JavaScript, TypeScript</Typography>
        </CardContentCustom>
    </React.Fragment>
);

const fe = (
    <React.Fragment>
        <CardContentCustom sx={{maxHeight: 'fit-content'}}>
            <Typography align='center'><DevicesIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Front End</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Selenium, Cypress, Playwright,
                Appium</Typography>
        </CardContentCustom>
    </React.Fragment>
);

const be = (
    <React.Fragment>
        <CardContentCustom sx={{maxHeight: 'fit-content'}}>
            <Typography align='center'><DataObjectIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Back End</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Supertest, RestAssured, Postman</Typography>
        </CardContentCustom>
    </React.Fragment>
);

const lt = (
    <React.Fragment>
        <CardContentCustom sx={{maxHeight: 'fit-content'}}>
            <Typography align='center'><CloudDoneIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>Load Testing</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>JMeter</Typography>
        </CardContentCustom>
    </React.Fragment>
);
const ci = (
    <React.Fragment>
        <CardContentCustom sx={{maxHeight: 'fit-content', overflow: 'auto'}}>
            <Typography align='center'><AutoModeIcon fontSize='large' color='primary'/></Typography>
            <Typography align='center' variant='subtitle1' fontWeight='bold'>CI</Typography>
            <Typography align='center' variant='body2' marginTop='1rem'>Jenkins, Github Action, Gitlab CI/CD</Typography>
        </CardContentCustom>
    </React.Fragment>
);

const it = (
    <React.Fragment>
        <CardContentCustom sx={{maxHeight: 'fit-content', overflow: 'auto'}}>
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

    return (
        <Paper className='main-paper ' elevation={5} style={{maxHeight: '80vh', overflow: 'auto'}}>
            <Typography variant='h4' align='center' fontWeight='bold' sx={{margin: '2rem'}}>Tech Stack</Typography>
            {/*<Grid container spacing={2} sx={{mt: '1rem'}}>*/}
            <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
                sx={{minHeight: '40vh'}}
            >
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card variant="outlined" sx={{aspectRatio: '1/1'}}>
                        {pl}
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{fe}</Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{be}</Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{lt}</Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{ci}</Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card variant="outlined" sx={{aspectRatio: '1/1'}}>{it}</Card>
                </Grid>
            </Grid>
        </Paper>

    )
}