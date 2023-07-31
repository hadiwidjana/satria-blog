import { useEffect, useState, useRef } from "react";
import Post from "../Post"
import * as React from 'react';
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Profile from "./Profile";
import List from "@mui/material/List";
import ThemeToggler from "../ThemeToggler";
import BlogFilter from "../BlogFilter";
import Container from '@mui/material/Container';



export default function IndexPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([])
    const profile = useRef()
    const blog = useRef()


    function scrollto(section) {
        section.current.scrollIntoView({
            behavior: "smooth"
        })
    }


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
        <div className="container">
            <Box className='section' ref={profile} sx={{}} >
                <Profile scrollto={scrollto} goToSectionRef={blog} />
            </Box>
            <Box className='section' ref={blog} sx={{ }} scrollto={scrollto}>
                <BlogFilter tags={tags} setLoading={setLoading} />
                {/* <ThemeToggler /> */}
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
            </Box>
            <Paper className='section' ref={profile} sx={{}} >
                <Container>footer</Container>
            </Paper>
        </div>

    )
}