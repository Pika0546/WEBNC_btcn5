import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const pages = [
    {
        text: "Tạo tài khoản",
        href:"/signup",
    },
    {
        text:"About",
        href:"/about",
    },
    {
        text:"Danh sách tài khoản",
        href:"/account"
    }
]


function ResponsiveAppBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: "flex",
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </Typography>
                    <Box sx={{ display:'flex' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.href}
                                href={page.href}
                                sx={{ my: 2, color: 'white', display: 'block' }}

                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>

                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
