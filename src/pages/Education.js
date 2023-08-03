import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Paper, styled, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import fazztrack from "../resources/fazztrack.png"
import southampton from "../resources/southampton.png"


const fazzCourses = `Main courses: QA Fundamental, Git and version control, Javascript, API and Postman, Mocha and Chai, Cypress, and MySQL`;

const southCourses = 'Main courses: Green Electronics, Photonics, Signal and Image Processing, Digital IC and System Design, Engineering Management and Law'


export default function Education({
                                      scrollto,
                                      goToSectionRef,
                                  }) {


    return (
        <>
        {/*// <Paper className='education' elevation={5} style={{overflow: 'auto'}}>*/}
            <Typography variant='h4' align='center' fontWeight='bold' sx={{margin: '2rem'}}>Education</Typography>
            <Paper sx={{p: '1vh', mb: '1vh', maxWidth:'800px', mx:'auto', bgcolor:'primary.main'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={2} sx={{}}>
                        <Avatar alt="Fazztrack" src={fazztrack} sx={{mx: 'auto', mt: '4vh', mb: '4vh'}}/>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Box sx={{mt: '2vh', mb: '2vh'}}>
                            <Typography fontWeight='bold'>QA Automation Engineer</Typography>
                            <Typography>{fazzCourses}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Paper sx={{p: '1vh', mb: '1vh', maxWidth:'800px', mx:'auto', bgcolor:'primary.main'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={2} sx={{}}>
                        <Avatar alt="Southampton" src={southampton} sx={{mx: 'auto', mt: '4vh', mb: '4vh'}}/>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Box sx={{mt: '2vh', mb: '2vh'}}>
                            <Typography fontWeight='bold'>Electronic Engineering (B.Eng)</Typography>
                            <Typography>{southCourses}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>

    )
}