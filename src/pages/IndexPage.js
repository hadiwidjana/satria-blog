import React, {Suspense, useEffect, useState} from 'react'
import {Box} from "@mui/material";
import Loading from "../Loading";



export default function IndexPage() {
    return (
        <Box className='landing-main'>
            <Loading/>
        </Box>

    )
}

