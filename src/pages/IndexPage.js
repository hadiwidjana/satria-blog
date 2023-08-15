import React, {createRef, useEffect, useMemo, useRef, useState} from 'react'
import {Box, Icon, SvgIcon, Typography} from "@mui/material";
import Loading from "../components/Loading";
import Boxes from "../components/Boxes";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {ReactComponent as Recent} from '../resources/recent-articles.svg'
import SelfPortrait from '../resources/SelfPortrait-bw.png'
import NewPostCarousel from "../components/NewPostCarousel";
import {useScroll, animated, useSpring} from '@react-spring/web'
import Button from "@mui/material/Button";
import './IndexPage.css'
import {Link} from "react-router-dom";
import Typewriter from "../components/Typewriter";
import Grid from "@mui/material/Unstable_Grid2";

const aboutMe = 'Currently QA Automation Engineer @ Gokomodo. I build reliable test automation framework that fit seamlessly with requirements. My focus is on clean, scalability, and reusability.'


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

    const srcString = 'Welcome to My Blog'


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

            <Loading/>


            {/*page 1*/}
            {/*<Boxes/>*/}
            <Box sx={{height: '100vh',}}>
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    display: 'flex',
                    bottom: 0,
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

            <Box sx={{position: 'absolute', top: '30%', width: '100%', pl: '20vh', pr: '20vh'}}>
                <Box sx={{flexWrap: 'wrap', display: 'flex', justifyContent: 'flex-end'}}>
                    <Typography align='left' variant='h2' sx={{}}>
                        <Typewriter{...{srcString}}/>
                    </Typography>
                </Box>
            </Box>

            {/*page 2*/}
            <Box sx={{pt: {xs: '2em', md: '6em'}}}>

                <Box className={'section-2-text'}>
                    <Box className={'rotating-recent'}>
                        <animated.div style={{
                            transform: scrollYProgress.to(val => `rotate(${val * 360}deg)`),
                            width: 'fit-content'
                        }}>
                            <SvgIcon sx={{
                                fontSize: {md: '10rem', xs: '7rem'},
                                display: 'block'
                            }}>
                                <Recent/>
                            </SvgIcon>
                        </animated.div>
                    </Box>


                    <Box className={'description-recent'}>
                        <Typography variant={'h6'} sx={{mb: '2em'}}>Drag through our latest
                            articles below. Want to read more stuff? Visit our blog
                            page.</Typography>
                        <Link to={`/blog`} style={{}}>
                            <Button variant={'text'} sx={{p: 0}}>
                                <Typography variant={'h5'} sx={{}}>
                                    ALL ARTICLES
                                    <ArrowOutwardIcon sx={{height: '100%', ml: '.7rem'}}/>
                                </Typography>
                            </Button>
                        </Link>

                    </Box>

                </Box>
                <animated.div style={{
                    transform: scrollYProgress.to(val => `translateX(${val * -100}px)`),
                }}>
                    {posts.length > 0 ?
                        <NewPostCarousel arr={posts}/> : null
                    }
                </animated.div>

            </Box>

            {/*page 3*/}
            <Box sx={{pt: {xs: '2em', md: '6em'}}}>

                <Box>
                </Box>
                <Box>
                </Box>

                <Grid container p={'2em'} maxWidth={'1200px'} mx={'auto'}>
                    <Grid item xs={12} md={5} className={'profile-description-container'}>
                        <Box className={'profile-description'}>
                            <Typography variant={'h2'} mb={'1em'}>ABOUT ME</Typography>
                            <Typography mb={'2em'}>{aboutMe}</Typography>
                            <Link to={`/about`} style={{}}>
                                <Button variant={'text'} sx={{p: 0}}>
                                    <Typography variant={'h5'} sx={{}}>
                                        ABOUT ME
                                        <ArrowOutwardIcon sx={{height: '100%', ml: '.7rem'}}/>
                                    </Typography>
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} className={'gap'}></Grid>
                    <Grid item xs={12} md={5} className={'profile-image-container'} sx={{
                        bgcolor:'action.hover',
                        '&:hover': {
                            bgcolor:'action.selected'
                        }
                    }}>
                        <animated.div style={{
                            transform: scrollYProgress.to(val => `translateY(${(val * -200)-100}px)`),
                        }}>
                            <Box className={'profile-image'} component={'img'} src={SelfPortrait}></Box>
                        </animated.div>
                    </Grid>
                </Grid>


            </Box>




        </div>

    )
}

