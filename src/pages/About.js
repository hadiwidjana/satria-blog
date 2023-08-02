import React from "react";
import {Box, Paper, Typography} from "@mui/material";



const summary = 'Automation Test Engineer with an objective of creating robust testing frameworks. With some experience in Java, JavaScript, and TypeScript, I have honed my skills in crafting efficient and reliable testing solutions. Combining technical expertise with a passion for excellence, I am adept at automating complex test scenarios, ensuring seamless software quality assurance.'





export default function About({
                                  scrollto,
                                  goToSectionRef,
                              }) {

    return (
        <Box className='about-me' style={{ overflow: 'none'}}>
            <Typography variant='h4' align='center' fontWeight='bold' sx={{margin: '2rem'}} color='white'>About Me</Typography>
            <Box sx={{maxWidth: '700px', mx: 'auto'}}>
                <Typography variant='body1' color='white'>{summary}</Typography>
            </Box>
        </Box>

    )
}