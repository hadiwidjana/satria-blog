import React, {useEffect} from "react";
import {CardActions, Paper, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Unstable_Grid2';
import List from "@mui/material/List";
import Stack from "@mui/material/Stack"; // Grid version 2


const fe = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                test
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br/>
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function About({
                                  scrollto,
                                  goToSectionRef,
                              }) {

    return (
            <Paper className='about-me 'elevation={3} style={{maxHeight: '100%', overflow: 'auto' }}>
                <Typography variant='h3' fontWeight='bold'>About Me</Typography>
                <Typography variant='body1'>Automation Test Engineer with a flair for creating robust testing
                    frameworks.
                    With a wealth of experience in Java, JavaScript, and TypeScript, I have honed my skills in crafting
                    efficient and reliable testing solutions. Combining technical expertise with a passion for
                    excellence, I
                    am adept at automating complex test scenarios, ensuring seamless software quality
                    assurance.</Typography>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <Card variant="outlined">{fe}</Card>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Card variant="outlined">{fe}</Card>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Card variant="outlined">{fe}</Card>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Card variant="outlined">{fe}</Card>
                    </Grid>
                </Grid>
            </Paper>

    )
}