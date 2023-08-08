import { useEffect, useState } from "react";
import Post from "../Post"
import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import List from "@mui/material/List";
import BlogFilter from "../BlogFilter";
import {Paper, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import NewPostCarousel from "../NewPostCarousel";




export default function Blog() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([])



    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/tag`).then(response => {
            response.json().then(posts => {
                setTags(posts)
            })
        })
    }, [])

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
        <Stack sx={{mt:'7em'}}>
                <Typography variant='h3' align='center' fontWeight='bold' sx={{mb:'1em'}}>Satria's Blog</Typography>
            <Paper elevation={3} sx={{maxWidth:'100%', mx:'auto', p:'2em'}}>
                <BlogFilter tags={tags} setLoading={setLoading} />
                <Divider variant="middle" />
                <List style={{ maxHeight: '80%', overflow: 'auto' }} >
                    {posts.length > 0 && posts.map(post => (
                        <Post {...post} />
                    ))}
                    <Box sx={{ mx: 'auto', textAlign: 'center' }}>
                        {loading === true && (
                            <CircularProgress />
                        )}
                    </Box>
                </List>
            </Paper>
        </Stack>

    )
}