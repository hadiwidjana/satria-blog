import React, { useEffect } from "react";
import Granim from "granim";
import Box from "@mui/material/Box";


const Profile = () => {
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
                        ['#242424', '#525252']
                    ],
                    transitionSpeed: 10000
                }
            }
        });
    }, [])


    return <Box sx={{w:'100%', height:'100vh'}}>
        <canvas id='canvas-basic' />
    </Box>
}

export default Profile;