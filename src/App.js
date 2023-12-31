import {Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import { deepmerge } from '@mui/utils';
import RegisterPage from './pages/RegisterPage';
import {UserContextProvider} from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useMediaQuery} from "@mui/material";
import React from 'react';
import { getDesignTokens, getThemedComponents } from './theme/Theme';
import { ColorModeContext } from './config/color-context';
import Blog from "./pages/Blog";
import About from "./pages/About";





function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = React.useState();

    React.useEffect(() => {
        setMode(prefersDarkMode ? 'dark' : 'light');
    }, [prefersDarkMode]);

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    let theme = React.useMemo(
        () =>
            createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
        [mode]
    );

    theme = responsiveFontSizes(theme);

    return (
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <UserContextProvider>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<IndexPage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/register' element={<RegisterPage/>}/>
                        <Route path='/create' element={<CreatePost/>}/>
                        <Route path='/post/:id' element={<PostPage/>}/>
                        <Route path='/edit/:id' element={<EditPost/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                        <Route path='/about' element={<About/>}/>
                    </Route>
                </Routes>
            </UserContextProvider>

        </ThemeProvider>
         </ColorModeContext.Provider>
    );
}

export default App;
