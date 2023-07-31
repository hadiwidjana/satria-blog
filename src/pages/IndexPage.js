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


export default function IndexPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([])
    const profile = useRef()
    const blog = useRef()


    function scrollto(section){
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
            <Paper className='section' ref={profile} sx={{}} >
                <Profile scrollto={scrollto} goToSectionRef={blog} />
            </Paper>
            <Paper className='section' ref={blog} sx={{ paddingTop: '8vh' }} scrollto={scrollto}>
                <List style={{ maxHeight: '100%', overflow: 'auto' }} >
                    <BlogFilter tags={tags} setLoading={setLoading}/>
                    {posts.length > 0 && posts.map(post => (
                        <Post {...post} />
                    ))}
                    <Box sx={{ mx: 'auto', textAlign: 'center' }}>
                        {loading === true && (
                            <CircularProgress />
                        )}
                        <ThemeToggler />
                    </Box>
                </List>
            </Paper>
            </div>

    )
}