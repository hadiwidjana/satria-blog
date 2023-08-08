import {useSpringCarousel} from 'react-spring-carousel'
import {Box, Paper, Typography} from "@mui/material";
import {useEffect, useMemo, useState} from "react";
import Button from "@mui/material/Button";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CardMedia from "@mui/material/CardMedia";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


const mockedItems = [
    {_id: 1, color: 'black', title: 'this is title 1'},
    {_id: 2, color: 'black', title: 'this is title 2'},
    {_id: 3, color: 'black', title: 'this is title 3'},
    {_id: 4, color: 'black', title: 'this is title 4'},
    {_id: 5, color: 'black', title: 'this is title 5'},
    {_id: 6, color: 'black', title: 'this is title 6'},

]

export default function NewPostCarousel({arr}) {

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        items: arr.map((i) => ({
            id: i._id,
            renderItem: (
                // <Box className='carousel-item' sx={{
                //     width: '100%',
                //     margin: '0 auto',
                //     overflow: 'hidden',
                //     height: '100%',
                // }}>
                <Card sx={{minHeight: '280px', width: '100%'}}>
                    <CardMedia
                        component="img"
                        image={i.cover}
                        alt={i.title}
                        sx={{
                            width: '100%',
                            minHeight: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            position:'absolute'
                        }}
                    />

                    <CardMedia
                        sx={{
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            width: '100%',
                            minHeight: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            position:'absolute'
                        }}
                    />
                    <CardContent sx={{position:'absolute', bottom:'10%', left:0, right:0}}>
                        <Typography variant="h4" textColor="text.secondary" mb={1}>
                            {i.title}
                        </Typography>
                    </CardContent>
                </Card>
                //     <Box
                //         component="img"
                //         src={i.cover}
                //         alt={i.title}
                //         sx={{
                //             width: '100%',
                //             minHeight: '100%',
                //             objectFit: 'cover',
                //             objectPosition: 'center',
                //
                //         }}
                //     />
                //     <Typography
                //         variant={'h5'}
                //         sx={{
                //             minWidth: '100%',
                //             minHeight: '100%',
                //             position: 'relative',
                //             objectPosition: 'center',
                //             objectFit: 'cover'
                //         }}>{i.title}</Typography>
                // </Box>
            ),
        })),
    });

    return (
        <Box sx={{
            height: '50vh',
            mx: 'auto',
            textAlign: 'center',
        }}>
            <Box className='new-post' sx={{height: '100%', width: '10%', display: 'inline-block'}} overflow={'hidden'}>
                <Button onClick={slideToPrevItem}
                        sx={{color: 'text.secondary', height: '100%', width: '100%'}}><NavigateBeforeIcon/></Button>
            </Box>
            <Box className='new-post' sx={{height: '100%', width: '80%', display: 'inline-block'}} overflow={'hidden'}>
                {carouselFragment}
            </Box>
            <Box className='new-post' sx={{height: '100%', width: '10%', display: 'inline-block'}} overflow={'hidden'}>
                <Button sx={{color: 'text.secondary', height: '100%', width: '100%'}}
                        onClick={slideToNextItem}><NavigateNextIcon/></Button>
            </Box>
        </Box>
    )
        ;
}