import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import Editor from '../Editor';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function CreatePost() {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

    async function createNewPost(ev) {
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])
        ev.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/post`, {
            method: 'POST',
            body: data,
            credentials: 'include'
        })

        if (response.ok) {
            setRedirect(true)
        }

    }

    if (redirect) {
        return <Navigate to={'/'}/>
    }

    return (

        // <form onSubmit={createNewPost}>
        //     <input type="title" placeholder="Title" value={title} onChange={ev => setTitle(ev.target.value)} />
        //     <input type="summary" placeholder="Summary" value={summary} onChange={ev => setSummary(ev.target.value)}/>
        //     <input type="file" onChange={ev => setFiles(ev.target.files)} />
        //     <Editor value={content} onChange={setContent} />
        //     {/* <button style={{marginTop:'5px'}}>Create Post</button> */}
        //     <Button variant="contained" type='submit' endIcon={<SendIcon/>}>Hello World</Button>
        // </form>


        <Stack
            className='post'
            onSubmit={createNewPost}
            component="form">
            <Stack item xs={3} spacing={5} width='100%'>
                <TextField
                    fullWidth
                    required
                    label="title"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    label="summary"
                    value={summary}
                    onChange={ev => setSummary(ev.target.value)}
                />
                <Button fullWidth variant="outlined" component="label">
                    Upload Image
                    <input hidden accept="image/*" type="file" onChange={ev => setFiles(ev.target.files)}/>
                </Button>
                <Editor value={content} onChange={setContent}/>
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    endIcon={<SendIcon/>}>Send Post</Button>
            </Stack>
        </Stack>

    )
}