import { useEffect, useState } from "react";
import Post from "../Post"
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import SubHeaderNavigation from "../ThemeToggler";





const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function IndexPage() {
    const [posts, setPosts] = useState([])
    const [tags, setTags] = useState([])
    const [tagName, setTagName] = React.useState([]);
    const searchRef = React.useRef('')



    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/tag`).then(response => {
            response.json().then(posts => {
                setTags(posts)
            })
        })
    }, [])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/post`).then(response => {
            response.json().then(posts => {
                setPosts(posts)
            })
        })

    }, [])


    const tagChange = async (event) => {
        const { target: { value }, } = event;
        setTagName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const search = async (event) => {
        let query1, query2;
        if (tagName !== null) {
            query1 = `tags=${tagName.join("&tags=")}`
        }
        if (searchRef.current.value !== null) {
            query2 = `title=${searchRef.current.value}`
        }

        const query = [query1, query2]


        await fetch(`${process.env.REACT_APP_API_URL}/post?` + query.join('&')).then(response => {
            response.json().then(postInfo => {
                setPosts(postInfo)
            })
        })
    }

    return (
        <>
            <Box className='blog-filter' sx={{ px: 0.5 }} >
                <Box>
                    {tags.length > 0 && tags.map(tag => (
                        <Box component='div' sx={{ width: "20%", display: 'inline-block' }}>
                            <FormControl sx={{ width: '90%' }}>
                                <InputLabel>Tag</InputLabel>
                                <Select
                                    multiple
                                    value={tagName}
                                    input={<OutlinedInput label="Tag" />}
                                    onChange={tagChange}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}>
                                    {tag.tags.map((tag) => (
                                        <MenuItem key={tag} value={tag}>
                                            <Checkbox checked={tagName.indexOf(tag) > -1} />
                                            <ListItemText primary={tag} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    ))}
                    <Box component='div' sx={{ width: "65%", display: 'inline-block' }}>
                        <TextField id="outlined-basic" label="Search Blog" variant="outlined" inputRef={searchRef} sx={{ width: '97%' }} />
                    </Box>
                    <Box component='div' sx={{ width: "15%", display: 'inline-block' }}>
                        <Button variant="outlined" onClick={search} sx={{ width: '90%', px: 0, height: 56, overflow: 'auto', mt: 3.5 }}><SearchIcon /></Button>
                    </Box>
                </Box>
            </Box>



            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
            <Box sx={{mx:'auto', textAlign:'center'}}>
            <SubHeaderNavigation/>
            </Box>
        </>
    )
}