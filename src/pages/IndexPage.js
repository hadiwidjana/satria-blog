import { useEffect, useState, useRef } from "react";
import Post from "../Post"
import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Landing from "./Landing";
import List from "@mui/material/List";
import About from "./About";
import BlogFilter from "../BlogFilter";
import {blue} from "@mui/material/colors";



export default function IndexPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([])
    const landing = useRef()
    const aboutMe = useRef()
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
            <Box className='section' ref={landing} sx={{}} >
                <Landing scrollto={scrollto} goToSectionRef={aboutMe} />
            </Box>
            <Box className='section-2' ref={aboutMe} sx={{backgroundColor: blue[200]}} >
                <About scrollto={scrollto} goToSectionRef={blog} />
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
        </div>

    )
}