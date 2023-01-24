import * as React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function AppBarResponsive() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        data-testid="title"
                        sx={style.titleMd}
                    >
                        Currency Converter
                    </Typography>

                    <Box sx={style.boxMd}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={style.menu}
                        >
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <MenuItem key='convert' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Convert</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/statistics' style={{ textDecoration: 'none' }}>
                                <MenuItem key='statistics' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Statistics</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={style.titleXs}
                    >
                        Currency Converter
                    </Typography>
                    <Box sx={style.boxXs}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button
                                key='convert'
                                onClick={handleCloseNavMenu}
                                sx={style.button}
                            >
                                Convert
                            </Button>
                        </Link>
                        <Link to='/statistics' style={{ textDecoration: 'none' }}>
                            <Button
                                key='statistics'
                                onClick={handleCloseNavMenu}
                                sx={style.button}
                            >
                                Statistics
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const style = {
    titleMd: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        color: 'inherit',
        textDecoration: 'none',
    },
    titleXs: {
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        color: 'inherit',
        textDecoration: 'none',
    },
    boxMd: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' }
    },
    boxXs: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' }
    },
    menu: {
        display: { xs: 'block', md: 'none' },
    },
    button: {
        my: 2,
        color: 'white',
        display: 'block'
    }
}

export default AppBarResponsive;