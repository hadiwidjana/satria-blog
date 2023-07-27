import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { setUserInfo } = useContext(UserContext)


    async function login(ev) {
        ev.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })

        } else {
            alert('Wrong credentials')
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }


    return (
        <Stack
            component="form"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
            onSubmit={login}
        >
            <Stack item xs={3} spacing={5} width='75%'>
                <TextField
                    fullWidth
                    required
                    label="Username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    type="submit">Login</Button>
            </Stack>
        </Stack>
    )
}