import React, {createRef, useEffect, useMemo, useRef, useState} from 'react'
import {Box, Icon, SvgIcon, Typography} from "@mui/material";
import Loading from "../components/Loading";
import Boxes from "../components/Boxes";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {ReactComponent as Recent} from '../resources/recent-articles.svg'
import NewPostCarousel from "../components/NewPostCarousel";
import {useScroll, animated, useSpring} from '@react-spring/web'
import Button from "@mui/material/Button";
import './IndexPage.css'


export default function IndexPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);
    const scrollRef = useRef(null);


    useEffect(() => {
        setWidth(elementRef.current.getBoundingClientRect().width);
    }, []); //empty dependency array so it only runs once at render


    const scrolling = useSpring({
        from: {transform: "translate(0%,0)"},
        to: {transform: "translate(-100%,0)"},
        config: {duration: width * 5},
        loop: true,
    });
    const scrolling2 = useSpring({
        from: {left: width, top: 0, position: 'absolute', transform: "translate(0%,0)"},
        to: {left: width, top: 0, position: 'absolute', transform: "translate(-100%,0)"},
        config: {duration: width * 5},
        loop: true,
    });

    const {scrollYProgress} = useScroll({
        container: scrollRef
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
        <div ref={scrollRef} className="container">
            {/*page 1*/}
            <Boxes/>
            <Box sx={{width: '100%', position: 'absolute', bottom: '8vh', display: 'block'}}>
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                }}>
                    <animated.div ref={elementRef} style={scrolling} className='scroll-title'>
                        <Typography noWrap variant='h1' sx={{
                            fontSize: {xs: 'max(9em, 15vw)', sm: '15rem'},
                            fontWeight: '450',
                            overflow: 'visible'
                        }}> Selenium
                            - Appium - Cypress -
                            Playwright - Cucumber - React - RestAssured - Supertest - BDD - Jenkins - MERN
                            - </Typography>
                    </animated.div>
                    <animated.div style={scrolling2} className='scroll-title'>
                        <Typography noWrap variant='h1' sx={{
                            fontSize: {xs: 'max(9em, 15vw)', sm: '15rem'},
                            fontWeight: '450',
                            overflow: 'visible'
                        }}> Selenium
                            - Appium - Cypress -
                            Playwright - Cucumber - React - RestAssured - Supertest - BDD - Jenkins - MERN
                            - </Typography>
                    </animated.div>
                </Box>
            </Box>

            <Box sx={{position: 'absolute', top: '30%', width: '100%', pl: '20vh', pr: '20vh', maxWidth: '100em'}}>
                <Box sx={{flexWrap: 'wrap', display: 'flex', justifyContent: 'flex-end'}}>
                    <Typography align='left' variant='h2' sx={{}}>
                        <span style={{display: 'block'}}>Welcome</span>
                        to My Blog
                    </Typography>
                </Box>
            </Box>

            {/*page 2*/}
            <Box sx={{height: '200vh', bgcolor: 'primary.dark', pt:{xs:'2em',md:'10em'}}}>

                <Box className={'section-2-text'}>
                    <Box className={'rotating-recent'}>
                        <animated.div style={{
                            transform: scrollYProgress.to(val => `rotate(${val * 360}deg)`),
                            width: 'fit-content'
                        }}>
                            <SvgIcon sx={{
                                fontSize: {md:'10rem',xs:'7rem'},
                                display: 'block',
                                color: 'white'
                            }}>
                                <Recent/>
                            </SvgIcon>
                        </animated.div>
                    </Box>


                    <Box className={'description-recent'}>
                        <Typography variant={'h6'} sx={{mb: '2em', color: 'text.secondary'}}>Drag through our latest
                            articles below. Want to read more stuff? Visit our blog
                            page.</Typography>
                        <Button sx={{p: 0}}>
                            <Typography color={'text.primary'} variant={'h5'} sx={{}}>VISIT BLOG</Typography>
                        </Button>
                    </Box>

                </Box>

                {posts.length > 0 ?
                    <NewPostCarousel arr={posts}/> : null
                }

            </Box>


            {/*<Loading/>*/}


        </div>

    )
}

