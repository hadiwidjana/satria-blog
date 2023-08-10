import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import Editor from "../components/Editor"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import {Typography} from "@mui/material";
import * as React from "react";


export default function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [tags,setTags] = useState('')
    const [tagsStore,setTagsStore] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title)
                    setContent(postInfo.content)
                    setTags(postInfo.tags)
                    setTagsStore(postInfo.tags)
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    async function updatePost(ev) {



        const data = new FormData()
        data.set('title', title)
        data.set('content', content)
        data.set('id', id)
        if(tags!==tagsStore){
            let tagArray = tags.split(',')
            tagArray.forEach(tag => data.append('tags[]', tag))
        }

        if (files?.[0]) {
            data.set('file', files?.[0])
        }
        ev.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/post`, {
            method: 'PUT',
            body: data,
            credentials: 'include'
        })

        if (response.ok) {
            setRedirect(true)
        }

    }

    if (redirect) {
        return <Navigate to={`/post/${id}`} />
    }

    return (
        <Stack sx={{mt:'7em'}}>
            <Typography variant='h3' align='center' fontWeight='bold' sx={{mb:'1em'}}>Edit Post</Typography>

        <Stack
            className='post'
            onSubmit={updatePost}
            component="form">
            <Stack item xs={3} spacing={5} width='100%'>
                <TextField
                    required
                    label="title"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <TextField
                    label="Tag (comma separated)"
                    defaultValue=''
                    value={tags}
                    onChange={ev => setTags(ev.target.value)}
                />
                <Button fullWidth variant="outlined" component="label">
                    Upload Image
                    <input hidden accept="image/*" type="file" onChange={ev => setFiles(ev.target.files)} />
                </Button>
                <Editor value={content} onChange={setContent} />
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    endIcon={<SendIcon/>}>Update Post</Button>
            </Stack>
        </Stack>
        </Stack>
    )
}