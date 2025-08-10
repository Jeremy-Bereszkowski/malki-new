'use client'
import {Box, Container, Typography, Button, Stack, Divider} from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

const Hero = () => {
    const handleNavClick = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #fefefe 0%, #f6f7f6 100%)',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(/footpath-background.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.3,
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', paddingTop: { xs: 2, lg: 4 }, paddingBottom: { xs: 8, lg: 12 } }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            mb: 1,
                            color: 'text.primary',
                            maxWidth: '4xl',
                            mx: 'auto',
                        }}
                    >
                        Malki{' '}
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            New
                        </Box>
                    </Typography>
                    <Box sx={{ textAlign: 'center', py: { xs: 4, lg: 4 }, px: { xs: 8, lg: 12 } }}>
                        <Divider sx={{ color: 'text.primary' }} component="hr" />
                    </Box>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            mb: 1,
                            color: 'text.primary',
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1.125rem', sm: '1.25rem' },
                        }}
                    >
                        COUNSELLOR & FAMILY THERAPIST
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            mb: 1,
                            color: 'text.primary',
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1.125rem', sm: '1.25rem' },
                        }}
                    >
                        FINDING NEW PATHWAYS BY WORKING TOGETHER
                    </Typography>
                </Box>

            </Container>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite',
                    '@keyframes bounce': {
                        '0%, 20%, 53%, 80%, 100%': {
                            transform: 'translateX(-50%) translateY(0)',
                        },
                        '40%, 43%': {
                            transform: 'translateX(-50%) translateY(-8px)',
                        },
                        '70%': {
                            transform: 'translateX(-50%) translateY(-4px)',
                        },
                    },
                }}
            >
                <KeyboardArrowDown sx={{ fontSize: 32, color: 'primary.main' }} />
            </Box>
        </Box>
    )
}

export default Hero