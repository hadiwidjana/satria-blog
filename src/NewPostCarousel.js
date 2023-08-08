import {useSpringCarousel} from 'react-spring-carousel'
import {Box, MobileStepper, Paper, Typography} from "@mui/material";
import {useEffect, useMemo, useState} from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


export default function NewPostCarousel({arr}) {



    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        withLoop: true,
        items: arr.map((i, index) => ({
            id: i._id,
            renderItem: (
                <Card sx={{
                    minHeight: '280px',
                    width: '100%',
                    bgcolor:'transparent',
                    boxShadow:'none',
                    backgroundImage:'none',
                    mx:'5%',
                    overflow:'hidden',
                    borderRadius:'1em'
                }}>
                    <CardMedia
                        component="img"
                        image={i.cover}
                        alt={i.title}
                        sx={{
                            width: '100%',
                            minHeight: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            mx:'auto'
                        }}
                    />

                    <CardMedia
                        sx={{
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            width: '90%',
                            minHeight: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            position: 'absolute',
                            top:0,
                            overflow:'hidden',
                            borderRadius:'1em'
                        }}
                    />
                    <CardContent sx={{
                        position: 'absolute',
                        bottom: '10%',
                        width:'90%',
                        objectPosition: 'center',
                    }}>
                        <Typography variant="h4" color="white" mb={1}>
                            {i.title}
                        </Typography>
                    </CardContent>
                </Card>
            ),
        })),
    });


    return (
        <Box sx={{
            width: '80%',
            height: '50vh',
            mx: 'auto',
            textAlign: 'center',
            maxWidth:'900px',
            marginTop: '60%',
        }}>
            {/*<Box className='new-post' sx={{height: '100%', width: '10%', display: 'inline-block'}} overflow={'hidden'}>*/}
            {/*    <Button onClick={slideToPrevItem}*/}
            {/*            sx={{color: 'text.secondary', height: '100%', width: '100%'}}><NavigateBeforeIcon/></Button>*/}
            {/*</Box>*/}
            <Box className='new-post' sx={{height: '100%', width: '100%', display: 'inline-block', overflowY:'clip'}} >
                {carouselFragment}

            </Box>
            {/*<Box className='new-post' sx={{height: '100%', width: '10%', display: 'inline-block'}} overflow={'hidden'}>*/}
            {/*    <Button sx={{color: 'text.secondary', height: '100%', width: '100%'}}*/}
            {/*            onClick={slideToNextItem}><NavigateNextIcon/></Button>*/}
            {/*</Box>*/}

        </Box>
    )
        ;
}