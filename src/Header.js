import {useContext, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import ThemeToggler from "./ThemeToggler";
import {Slide, useScrollTrigger} from "@mui/material";
import PropTypes from "prop-types";



const drawerWidth = 240;

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Header(props) {
    const { windows } = props;
    const theme = useTheme();
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const windowWidth = useRef(window.innerWidth);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = windows !== undefined ? () => windows().document.body : undefined;



    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/profile`, {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function logout() {
        fetch(`${process.env.REACT_APP_API_URL}/logout`, {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo(null)
    }

    const username = userInfo?.username

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color='text.secondary' sx={{ my: 2 }}>
                HOME
            </Typography>
            </Link>
            <Divider />
            <List>
                {username && (
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <Link to={'/blog'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary">Blog</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <Link to={'/about'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary">About Me</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <Link to={'/create'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary">Create a Post</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <Link to={'/'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary" onClick={logout}>Logout</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                    </ListItem>
                )}
                {!username && (
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <Link to={'/blog'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary">Blog</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <Link to={'/about'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary">About Me</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <Link to={'/login'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary">Login</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                        {/*<ListItemButton sx={{ textAlign: 'center' }}>*/}
                        {/*    <ListItemText primary={*/}
                        {/*        <Link to={'/register'} style={{ textDecoration: 'none' }}>*/}
                        {/*            <Typography variant="body3" color="text.secondary">Register</Typography>*/}
                        {/*        </Link>*/}
                        {/*    } />*/}
                        {/*</ListItemButton>*/}
                    </ListItem>
                )}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <HideOnScroll {...props}>
            <AppBar component="nav"
                    sx={{boxShadow:'none', backgroundColor:'transparent', backgroundImage:'none'}}
            >
                <Toolbar sx={{mt:'2em', mx:{sm:'auto',xs:'1em'}}}>
                    <Box sx={{display:{sm:'inline-block'}, flexGrow:{xs:1}}}>
                        <Link to="/">
                            <Typography variant='h6' color='primary.main'fontWeight='bold'>SATRIA</Typography>
                        </Link>
                    </Box>
                    <Box sx={{display:{sm:'inline-block'}}}>
                        <IconButton
                            color="primary"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{ color: 'primary.main' }} />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {username && (
                                <List>
                                    <Link to={'/blog'}>
                                        <Button sx={{ color: 'primary.main' }}>Blog</Button>
                                    </Link>
                                    <Link to={'/about'}>
                                        <Button sx={{ color: 'primary.main' }}>About Me</Button>
                                    </Link>
                                    <Link to={'/create'}>
                                        <Button sx={{ color: 'primary.main' }}>Create a Post</Button>
                                    </Link>
                                    <Link to={'/'}>
                                        <Button sx={{ color: 'primary.main' }} onClick={logout}>Logout</Button>
                                    </Link>
                                </List>
                            )}
                            {!username && (
                                <List>
                                    <Link to={'/blog'}>
                                        <Button sx={{ color: 'primary.main' }}>Blog</Button>
                                    </Link>
                                    <Link to={'/about'}>
                                        <Button sx={{ color: 'primary.main' }}>About Me</Button>
                                    </Link>
                                    <Link to={'/login'}>
                                        <Button sx={{ color: 'primary.main' }}>Login</Button>
                                    </Link>
                                    {/*<Link to={'/register'}>*/}
                                    {/*    <Button sx={{ color: '#fff' }}>Register</Button>*/}
                                    {/*</Link>*/}
                                </List>
                            )}
                        </Box>
                    </Box>
                        {windowWidth.current >= 600 ? (
                            <Box sx={{ display: {sm: 'inline-block', xs: 'none'}}}>
                                <ThemeToggler/>
                            </Box>
                        ):(null)}


                </Toolbar>
            </AppBar>
            </HideOnScroll>
            <Box component="nav">
                <Drawer
                    anchor="right"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                    {windowWidth.current <= 600 ? (
                        <Box sx={{ mx:'auto', height:'100%'}}>
                            <Box sx={{bottom:'10%', position:'absolute', left:'35%'}}>
                            <ThemeToggler/>
                            </Box>
                        </Box>
                    ):(null)}
                </Drawer>
            </Box>
        </Box>
    )
}