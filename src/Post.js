import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import ReactTimeAgo from 'react-time-ago';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";


export default function Post({ _id, title, tags, cover, content, createdAt, author }) {

    return (
        <Stack className='post' maxWidth='800px' sx={{ mx:'auto'}}>
            <Link to={`/post/${_id}`} style={{ textDecoration: 'none' }} className='card-link'>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="280px"
                            image={cover}
                            alt={title}
                        />
                        <CardContent>
                            <div>
                                <Typography gutterBottom variant="h5" component="div" color="text.primary">
                                    {title}
                                </Typography>
                            </div>
                            <Typography gutterBottom variant="caption" component="div" color="text.primary">
                                {author.username} - <ReactTimeAgo date={createdAt} locale="en-US" />
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3,
                                }}>
                                <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
                            </Typography>
                            <Box marginTop='10px'>
                                {tags.length > 0 && tags.map(tag => (
                                    <Chip variant="outlined" label={tag} width='fit-content' sx={{ "margin-right": "10px" }} />
                                ))}
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Stack>


    )
}