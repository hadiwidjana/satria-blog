import {
    Box,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
    Checkbox,
    ListItemText,
    TextField,
    Button
} from "@mui/material";
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Unstable_Grid2";


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

export default function BlogFilter({tags, setLoading, setPosts}) {
    const [tagName, setTagName] = React.useState([]);
    const searchRef = React.useRef('')
    const tagChange = async (event) => {
        const {target: {value},} = event;
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
        setLoading(true)
        await fetch(`${process.env.REACT_APP_API_URL}/post?` + query.join('&')).then(response => {
            response.json().then(postInfo => {
                setPosts(postInfo)
            })
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <Box className='blog-container' sx={{ mb: '2em'}}>
            <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
                overflow='hidden'
            >
                <Grid xs={12} md={2} >
                    {tags.length > 0 && tags.map(tag => (
                        <FormControl sx={{ width:'100%', display: 'inline-block', verticalAlign: 'bottom', bgcolor:'background.default'}}>
                            <InputLabel>Tag</InputLabel>
                            <Select
                                fullWidth
                                multiple
                                value={tagName}
                                input={<OutlinedInput label="Tag"/>}
                                onChange={tagChange}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}>
                                {tag.tags.map((tag) => (
                                    <MenuItem key={tag} value={tag}>
                                        <Checkbox checked={tagName.indexOf(tag) > -1}/>
                                        <ListItemText primary={tag}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ))}
                </Grid>
                <Grid xs={12} md={8}>
                    <TextField id="outlined-basic" label="Search Blog" variant="outlined" inputRef={searchRef}
                               sx={{width: '100%', bgcolor:'background.default'}}/>
                </Grid>
                <Grid xs={12} md={2}>
                    <Button variant="outlined" onClick={search}
                            sx={{width: '100%', height: '56px', bgcolor:'background.default'}}><SearchIcon/></Button>
                </Grid>
            </Grid>
        </Box>
    )
}
