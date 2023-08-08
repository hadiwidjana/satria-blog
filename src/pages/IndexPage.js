import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Box, Icon, SvgIcon, Typography} from "@mui/material";
import Loading from "../Loading";
import Boxes from "../Boxes";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {ReactComponent as Recent} from '../resources/recent-articles.svg'
import NewPostCarousel from "../NewPostCarousel";
import { useScroll, animated, useSpring } from '@react-spring/web'



export default function IndexPage() {
    const parallax = useRef(null)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);


    const props = useSpring({
        from: {transform: 'rotate(0deg)'},
        to: {transform: 'rotate(360deg)'},
        config: {
            friction:200,
            tension:10,
        },
        loop: true,
    })



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
        <Box  className='landing-main'>
            <Parallax ref={parallax} pages={2.5}>
                <ParallaxLayer offset={0} speed={0} style={{height: '300vh', width: '100%'}}>
                    <Boxes/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={1} style={{}}>
                    <Typography align='center' variant='h1' sx={{fontWeight: 'bold', overflow:'hidden'}}>Welcome to My Blog</Typography>
                    <Typography align='center' variant='h5' sx={{fontWeight: 'bold'}}>I Share Anything Related to
                        Software Testing and Development.</Typography>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.1} style={{}}>
                    <Box sx={{height:'200vh', bgcolor:'primary.dark'}}></Box>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.3} style={{}}>
                    <Box sx={{
                        bgcolor:'primary.main',
                        width: 'fit-content',
                        mx:'auto',
                        p: '2em',
                        borderRadius: '2em',
                    }} >
                    <animated.div  style={
                        props
                    }>
                        <SvgIcon sx={{
                            fontSize: '7rem',
                            mx: 'auto',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                            color: 'white'
                        }}>
                            <Recent/>
                        </SvgIcon>
                    </animated.div>
                    </Box>
                </ParallaxLayer>



                <ParallaxLayer offset={1} speed={1} style={{}}>
                    <ParallaxLayer offset={0} speed={0.25} style={{}} horizontal>

                        {posts.length > 0 ?
                            <NewPostCarousel arr={posts}/> : null
                        }
                    </ParallaxLayer>
                </ParallaxLayer>
                <Loading/>

            </Parallax>
        </Box>

    )
}

