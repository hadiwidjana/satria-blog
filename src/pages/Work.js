import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Paper, styled, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Work({
                                  scrollto,
                                  goToSectionRef,
                              }) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Paper className='tech-stack' elevation={5} style={{ overflow: 'auto'}} sx={{pb:'3rem'}}>
            <Typography variant='h4' align='center' fontWeight='bold' sx={{margin: '2rem'}}>Work History</Typography>
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            Gokomodo
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{textAlign:'left'}}>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Oct '22 - Present
                        </Typography>
                        <Typography fontWeight='bold'>
                            QA Automation Engineer
                        </Typography>
                        <Typography variant='p'>
                            • Conducted functional, performance, and regression testing on web and mobile applications<br/>
                            • Utilized Appium, Selenium, RestAssured to automate testing processes<br/>
                            • Identified and reported defects using issue tracking systems<br/>
                            • Collaborated with developers to resolve defects and improve the overall quality of the product<br/>
                            • Designed the test framework and created the documentation.<br/>
                            • Trained manual testers to write test scripts.<br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            Migo
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{textAlign:'left'}}>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Sep '21 - Oct '22
                        </Typography>
                        <Typography fontWeight='bold'>
                            Production Engineer
                        </Typography>
                        <Typography variant='p'>
                            • Design repair process for Asset Clinic department and realized it into working SOP, troubleshooting tree
                            and troubleshooting guide.<br/>
                            • Repair defective MDS (Migo download station) and analyze the root cause. Create improvement plan based
                            on the root cause found.<br/>
                            • Skill transfer and training for new Asset Clinic technician.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            Mobifix
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{textAlign:'left'}}>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Mar '18 - Jan '20
                        </Typography>
                        <Typography fontWeight='bold'>
                            Store Manager
                        </Typography>
                        <Typography variant='p'>
                            • Manage the working arrangement of small team of repair technicians. Provide technical support and
                            balance the workload.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            Vivo
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{textAlign:'left'}}>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Sep '16 - Nov '17
                        </Typography>
                        <Typography fontWeight='bold'>
                            Production Engineer
                        </Typography>
                        <Typography variant='p'>
                            • Electronic Test Design: Ensured every product met the quality requirements by designing some test
                            sequences for assembled products
                            • Root Cause Analysis: Found out the root cause of the product failure and created the preventive measure to
                            reduce the failure rate.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Paper>

    )
}