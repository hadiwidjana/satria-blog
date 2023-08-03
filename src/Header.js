import { useContext, useEffect } from "react";
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
import { grey } from '@mui/material/colors';

import { Wave } from "react-animated-text";


const drawerWidth = 240;

export default function Header(props) {
    const { window } = props;
    const theme = useTheme();
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [mobileOpen, setMobileOpen] = React.useState(false);



    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;



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
            <Typography variant="h6" sx={{ my: 2 }}>
                NAVIGATION
            </Typography>
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
            <AppBar component="nav" sx={{boxShadow:'none', backgroundColor:'transparent', backgroundImage:'none'}}>
                <Toolbar sx={{mt:'2em', mx:'1em'}}>
                    <Box sx={{display:'inline-block'}}>
                        <Link to="/">
                            <Box sx={{width:'5rem', overflow:'hidden', height:'2rem'}}>
                            <Typography variant='h6' color={grey[200]} fontWeight='bold'>SATRIA HOME</Typography>
                            </Box>
                        </Link>
                    </Box>
                    <Box sx={{mx:'auto', display:'inline-block'}}>
                    <ThemeToggler/>
                    </Box>
                    <Box sx={{display:'inline-block'}}>
                        <IconButton
                            color="primary"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {username && (
                                <List>
                                    <Link to={'/blog'}>
                                        <Button sx={{ color: '#fff' }}>Blog</Button>
                                    </Link>
                                    <Link to={'/create'}>
                                        <Button sx={{ color: '#fff' }}>Create a Post</Button>
                                    </Link>
                                    <Link to={'/'}>
                                        <Button sx={{ color: '#fff' }} onClick={logout}>Logout</Button>
                                    </Link>
                                </List>
                            )}
                            {!username && (
                                <List>
                                    <Link to={'/blog'}>
                                        <Button sx={{ color: '#fff' }}>Blog</Button>
                                    </Link>
                                    <Link to={'/login'}>
                                        <Button sx={{ color: '#fff' }}>Login</Button>
                                    </Link>
                                    {/*<Link to={'/register'}>*/}
                                    {/*    <Button sx={{ color: '#fff' }}>Register</Button>*/}
                                    {/*</Link>*/}
                                </List>
                            )}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
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
                </Drawer>
            </Box>
        </Box>
    )
}