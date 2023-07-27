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
import Logo from './satria.png'

const drawerWidth = 240;


export default function Header(props) {
    const { window } = props;


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
                                <Link to={'/login'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary">Login</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <Link to={'/register'} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body3" color="text.secondary">Register</Typography>
                                </Link>
                            } />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <Box display='flex' flexGrow={1}>
                        <Link to="/">
                            <Box
                                component="img"
                                sx={{
                                    width: '100%',
                                    maxWidth: { xs: 100, sm: 130, md:160, lg:180, xl:200 },
                                }}
                                src={Logo}
                            />
                        </Link>
                    </Box>
                    <Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {username && (
                                <List>
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
                                    <Link to={'/login'}>
                                        <Button sx={{ color: '#fff' }}>Login</Button>
                                    </Link>
                                    <Link to={'/register'}>
                                        <Button sx={{ color: '#fff' }}>Register</Button>
                                    </Link>
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