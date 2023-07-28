import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { formatISO9075 } from "date-fns"
import { UserContext } from "../UserContext"
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Chip} from "@mui/material";
import Post from "../Post";

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null)
    const { userInfo } = useContext(UserContext)
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo)
            })
        })
    }, [])


    if (!postInfo) return ''
    return (
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
                        <Button variant="outlined" className="edit-row" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" height="1.5rem">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            Edit this post
                        </Button>
                    </Link>
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
                <Chip variant="outlined" label={tag} width='fit-content' sx={{"margin-right":"10px"}}/>
            ))}
            </Box>



        </Stack>
    )
}