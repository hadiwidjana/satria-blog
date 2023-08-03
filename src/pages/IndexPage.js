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
import Tech from "./Tech";
import Work from "./Work";
import Education from "./Education";



export default function IndexPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([])
    const landing = useRef()
    const aboutMe = useRef()
    const techStack = useRef()
    const work = useRef()
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
            <Box className='section' sx={{}} >
                <Landing/>
            </Box>
            <Box sx={{backgroundColor: 'primary.main'}} >
                <About/>
            </Box>
            <Box sx={{pt:'10vh',pb:'10vh'}}  >
                <Tech />
            </Box>
            <Box  sx={{backgroundColor: 'primary.main',pt:'10vh',pb:'10vh'}}>
                <Work/>
            </Box>
            <Box sx={{pt:'10vh',pb:'10vh'}}  >
                <Education />
            </Box>


            {/*<Box className='section' ref={blog} sx={{ }} scrollto={scrollto}>*/}
            {/*    <BlogFilter tags={tags} setLoading={setLoading} />*/}
            {/*    /!* <ThemeToggler /> *!/*/}
            {/*    <List style={{ maxHeight: '80%', overflow: 'auto' }} >*/}
            {/*        {posts.length > 0 && posts.map(post => (*/}
            {/*            <Post {...post} />*/}
            {/*        ))}*/}
            {/*        <Box sx={{ mx: 'auto', textAlign: 'center' }}>*/}
            {/*            {loading === true && (*/}
            {/*                <CircularProgress />*/}
            {/*            )}*/}
            {/*        </Box>*/}
            {/*    </List>  */}
            {/*</Box>*/}
        </div>

    )
}