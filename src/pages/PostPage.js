import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { formatISO9075 } from "date-fns"
import { UserContext } from "../UserContext"
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Chip } from "@mui/material";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import * as React from "react";
// import {configure} from "@testing-library/react";



export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null)
    const { userInfo } = useContext(UserContext)
    const [redirect, setRedirect] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo)
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // document.addEventListener('DOMContentLoaded', (event) => {
    //     hljs.highlightAll();
    // });

    document.querySelectorAll('pre').forEach(el => {
        // then highlight each
        hljs.configure({
            languages: ['java','javascript','typescript','xml','html','css','json', 'python']
        })
        hljs.highlightElement(el);

    })

    const deletePost = async (event) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/post/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })

        if (response.ok) {
            response.json().then(userInfo => {
                setRedirect(true)
            })
        }

        
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }



    if (!postInfo) return ''
    return (
        <div className="container">
            <Loading/>
        <Stack className="post-page">
            <Typography gutterBottom variant="h4" component="div" color="text.primary" textAlign="center" fontWeight='bold' >
                {postInfo.title}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.primary" textAlign="center">
                {postInfo.author.username} - <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            </Typography>

            <Box textAlign='center' marginBottom='10px'>
                {userInfo.id === postInfo.author._id && (
                    <Link className="edit-btn" to={`/edit/${postInfo._id}`} >
                        <Button variant="outlined" className="edit-row" sx={{mx:1}} >
                            <EditNoteIcon />
                            Edit
                        </Button>
                    </Link>
                )}
                {userInfo.id === postInfo.author._id && (
                        <Button variant="outlined" className="delete-row" color="error" sx={{mx:1}} onClick={deletePost}>
                            <DeleteForeverIcon />
                            Delete
                        </Button>
                )}
            </Box>

            <Box
                component="img"
                sx={{
                    height: 300,
                    widht: '100%',
                    objectFit: 'cover'
                }}
                alt="The house from the offer."
                src={`${postInfo.cover}`}
                marginBottom='20px'
            />
            <Typography variant="body" color="text.secondary">
                <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            </Typography>
            <Box marginTop='20px'>
                {postInfo.tags.length > 0 && postInfo.tags.map(tag => (
                    <Chip variant="outlined" label={tag} width='fit-content' sx={{ "margin-right": "10px" }} />
                ))}
            </Box>

        </Stack>
        </div>
    )
}