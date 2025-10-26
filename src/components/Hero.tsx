'use client'
import {Box, Container, Typography, Divider} from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

const Hero = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #fefefe 0%, #f6f7f6 100%)',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(/footpath-background.jpg)`,
                    backgroundPositionY: '-80px',
                    backgroundPositionX: '40%',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.85,
                },
            }}
        >
            <Container maxWidth='lg' sx={{ mt: '15rem', position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', paddingTop: { xs: 2, lg: 4 }, paddingBottom: { xs: 8, lg: 12 } }}>
                    <Typography
                        variant='h1'
                        component='h1'
                        sx={{
                            mb: 4,
                            color: 'text.primary',
                            maxWidth: '4xl',
                            mx: 'auto',
                        }}
                    >
                        Malki New
                    </Typography>
                    <Typography
                        variant='h5'
                        component='p'
                        sx={{
                            color: 'text.primary',
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1.125rem', sm: '1.25rem' },
                        }}
                    >
                        FINDING NEW PATHWAYS TOGETHER
                    </Typography>
                    <Box sx={{ textAlign: 'center', py: { xs: 1, lg: 1 }, px: { xs: 14, lg: 18 } }}>
                        <Divider sx={{ color: 'text.secondary', backgroundColor: 'text.secondary', height: '2px', border: 'none' }} component='hr' />
                    </Box>
                    <Typography
                        variant='h5'
                        component='p'
                        sx={{
                            color: 'text.primary',
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1.125rem', sm: '1.25rem' },
                        }}
                    >
                        COUNSELLOR & FAMILY THERAPIST
                    </Typography>
                </Box>
            </Container>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 48,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite',
                    '@keyframes bounce': {
                        '0%, 20%, 53%, 80%, 100%': {
                            transform: 'translateX(-50%) translateY(0)',
                        },
                        '40%, 43%': {
                            transform: 'translateX(-50%) translateY(-20px)',
                        },
                        '70%': {
                            transform: 'translateX(-50%) translateY(-10px)',
                        },
                    },
                }}
            >
                <KeyboardArrowDown sx={{ fontSize: 48, color: 'black' }} />
            </Box>
        </Box>
    )
}

export default Hero