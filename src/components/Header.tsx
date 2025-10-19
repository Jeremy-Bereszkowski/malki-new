'use client'
import {
    AppBar,
    Toolbar,
    Box,
    Container,
    useScrollTrigger,
    Slide,
    Tooltip,
    IconButton
} from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
    })

    return (
        <Slide appear={false} direction='down' in={!trigger}>
            <AppBar
                position='fixed'
                sx={{
                    backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                    backdropFilter: trigger ? 'blur(10px)' : 'none',
                    boxShadow: trigger ? 2 : 0,
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <Container maxWidth='xl'>
                    <Toolbar sx={{ minHeight: { xs: 64, lg: 80 }, flexDirection: 'row-reverse' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Tooltip title={'Email'} placement='bottom'>
                                <IconButton
                                    href={'mailto:malki.new@gmail.com'}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'primary.50',
                                        }
                                    }}
                                >
                                    <MailOutlineIcon sx={{ color: 'text.primary'}} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    )
}

export default Header