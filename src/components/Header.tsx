'use client'
import {
    AppBar,
    Toolbar,
    Box,
    Container,
    useScrollTrigger,
    Slide,
    useTheme,
    Tooltip,
    IconButton
} from '@mui/material'

import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
    const theme = useTheme()

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
    })

    return (
        <>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                        backdropFilter: trigger ? 'blur(10px)' : 'none',
                        boxShadow: trigger ? 2 : 0,
                        transition: 'all 0.3s ease-in-out',
                    }}
                >
                    <Container maxWidth="xl">
                        <Toolbar sx={{ minHeight: { xs: 64, lg: 80 }, flexDirection: 'row-reverse' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Tooltip title={"Phone"} placement="bottom">
                                    <IconButton
                                        href={"tel:+61450527478"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'primary.main',
                                            '&:hover': {
                                                backgroundColor: 'primary.50',
                                            }
                                        }}
                                    >
                                        <PhoneIcon  style={{color: 'gray'}} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title={"Email"} placement="bottom">
                                    <IconButton
                                        href={"mailto:malki.new@gmail.com"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'primary.main',
                                            '&:hover': {
                                                backgroundColor: 'primary.50',
                                            }
                                        }}
                                    >
                                        <MailOutlineIcon  style={{color: 'gray'}} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title={"LinkedIn"} placement="bottom">
                                    <IconButton
                                        href={"https://www.linkedin.com/in/malki-new-952555154"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'primary.main',
                                            '&:hover': {
                                                backgroundColor: 'primary.50',
                                            }
                                        }}
                                    >
                                        <LinkedInIcon  style={{color: 'gray'}} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>
        </>
    )
}

export default Header