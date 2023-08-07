import React from 'react'
import {Box} from "@mui/material";
import Loading from "../Loading";
import Welcome from "../Welcome";


export default function IndexPage() {
    return (
        <Box className='landing-main'>
            {/*<Loading/>*/}
            <Welcome/>
        </Box>

    )
}

