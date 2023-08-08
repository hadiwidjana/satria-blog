import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Box, Typography} from "@mui/material";
import Loading from "../Loading";
import Boxes from "../Boxes";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {useTrail, a} from 'react-spring'
import NewPostCarousel from "../NewPostCarousel";


export default function IndexPage() {
    const parallax = useRef(null)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API_URL}/post`).then(response => {
                response.json().then(posts => {
                    setPosts(posts)
                })
            }).finally(() => {
                setLoading(false)
            })
        } catch (error) {
            setLoading(false)
            console.error(error)
        }


    }, [])


    return (
        <Box className='landing-main'>
            <Parallax ref={parallax} pages={3}>
                <ParallaxLayer offset={0} speed={0} style={{height: '300vh', width: '100%'}}>
                    <Boxes/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={0.3} style={{}}>
                    <Typography align='center' variant='h1' sx={{fontWeight: 'bold'}}>Welcome to My Blog</Typography>
                    <Typography align='center' variant='h5' sx={{fontWeight: 'bold'}}>I Share Anything Related to
                        Software Testing and Development.</Typography>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1} style={{height: '100vh', width: '100%'}}>
                    <Loading/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} style={{}}>
                    <ParallaxLayer offset={0} speed={0.25} style={{}} horizontal>

                    {posts.length > 0 ?
                            <NewPostCarousel arr={posts}/> : null
                        }
                    </ParallaxLayer>
                </ParallaxLayer>

            </Parallax>
        </Box>

    )
}

