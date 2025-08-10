// package.json
{
    "name": "malkinew-website",
    "version": "0.1.0",
    "private": true,
    "scripts": {
    "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
},
    "dependencies": {
    "next": "^15.0.0",
        "react": "^18.0.0",
        "react-dom": "^18.0.0",
        "@types/node": "^20.0.0",
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0",
        "typescript": "^5.0.0",
        "@mui/material": "^5.15.0",
        "@mui/system": "^5.15.0",
        "@mui/icons-material": "^5.15.0",
        "@emotion/react": "^11.11.0",
        "@emotion/styled": "^11.11.0"
}
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    },
}

module.exports = nextConfig

// src/theme/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#627062', // sage-500
            light: '#7e8a7e', // sage-400
            dark: '#4d5a4d', // sage-600
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#e9d7c3', // cream-500
            light: '#f1e7d9', // cream-400
            dark: '#d4b896', // cream-600
            contrastText: '#2c332c',
        },
        background: {
            default: '#fefefe', // cream-50
            paper: '#ffffff',
        },
        text: {
            primary: '#343c34', // sage-800
            secondary: '#627062', // sage-500
        },
        grey: {
            50: '#f6f7f6',
            100: '#e3e6e3',
            200: '#c6ccc6',
            300: '#a3aca3',
            400: '#7e8a7e',
            500: '#627062',
        }
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Merriweather", "Georgia", serif',
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontFamily: '"Merriweather", "Georgia", serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.3,
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h3: {
            fontFamily: '"Merriweather", "Georgia", serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.4,
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: 500,
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 8px rgba(98, 112, 98, 0.2)',
                    },
                },
                outlined: {
                    borderWidth: 2,
                    '&:hover': {
                        borderWidth: 2,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 2px 8px rgba(98, 112, 98, 0.1)',
                    '&:hover': {
                        boxShadow: '0 4px 16px rgba(98, 112, 98, 0.15)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                    },
                },
            },
        },
    },
})

export default theme

// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme/theme'

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({
    weight: ['300', '400', '700'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Malki New | Counsellor & Family Therapist',
    description: 'Professional counselling and family therapy services. Providing compassionate, evidence-based support for individuals, couples, and families.',
    keywords: 'counsellor, therapist, family therapy, mental health, counselling',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
        </head>
        <body className={inter.className}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}

// src/app/page.tsx
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Services />
            <Approach />
            <Contact />
            <Footer />
        </main>
    )
}

// src/components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useScrollTrigger,
    Slide,
    useTheme,
    useMediaQuery,
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
    })

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Approach', href: '#approach' },
        { name: 'Contact', href: '#contact' },
    ]

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileOpen(false)
    }

    const drawer = (
        <Box sx={{ width: 250, pt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 1 }}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton onClick={() => handleNavClick(item.href)}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavClick('#contact')}>
                        <Button variant="contained" fullWidth sx={{ m: 1 }}>
                            Book Consultation
                        </Button>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

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
                        <Toolbar sx={{ minHeight: { xs: 64, lg: 80 } }}>
                            <Typography
                                variant="h4"
                                component="a"
                                href="#"
                                sx={{
                                    flexGrow: 1,
                                    fontFamily: 'Merriweather, serif',
                                    fontWeight: 700,
                                    color: 'primary.main',
                                    textDecoration: 'none',
                                    fontSize: { xs: '1.5rem', lg: '2rem' },
                                }}
                            >
                                Malki New
                            </Typography>

                            {!isMobile ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.name}
                                            onClick={() => handleNavClick(item.href)}
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': {
                                                    backgroundColor: 'primary.50',
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Button>
                                    ))}
                                    <Button
                                        variant="contained"
                                        onClick={() => handleNavClick('#contact')}
                                        sx={{ ml: 2 }}
                                    >
                                        Book Consultation
                                    </Button>
                                </Box>
                            ) : (
                                <IconButton
                                    color="primary"
                                    onClick={handleDrawerToggle}
                                    sx={{ ml: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {drawer}
            </Drawer>
        </>
    )
}

export default Header

// src/components/Hero.tsx
import { Box, Container, Typography, Button, Stack } from '@mui/material'
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a3aca3' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.3,
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', py: { xs: 8, lg: 12 } }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            mb: 3,
                            color: 'text.primary',
                            maxWidth: '4xl',
                            mx: 'auto',
                        }}
                    >
                        Compassionate Counselling &{' '}
                        <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>
                            Family Therapy
                        </Box>
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            mb: 4,
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1.125rem', sm: '1.25rem' },
                        }}
                    >
                        Supporting individuals, couples, and families on their journey toward healing,
                        growth, and stronger relationships through evidence-based therapeutic approaches.
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => handleNavClick('#contact')}
                            sx={{ px: 4, py: 2, fontSize: '1.125rem' }}
                        >
                            Start Your Journey
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => handleNavClick('#about')}
                            sx={{ px: 4, py: 2, fontSize: '1.125rem' }}
                        >
                            Learn More
                        </Button>
                    </Stack>
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

// src/components/About.tsx
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar
} from '@mui/material'
import { Person } from '@mui/icons-material'

const About = () => {
    return (
        <Box id="about" sx={{ py: { xs: 8, lg: 12 }, backgroundColor: 'background.paper' }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
                            About Malki New
                        </Typography>

                        <Box sx={{ '& > p': { mb: 2, color: 'text.secondary', fontSize: '1.125rem', lineHeight: 1.7 } }}>
                            <Typography component="p">
                                With over a decade of experience in counselling and family therapy, I am passionate
                                about creating a safe, non-judgmental space where healing and growth can flourish.
                                My approach combines warmth, empathy, and evidence-based therapeutic techniques to
                                support you through life's challenges.
                            </Typography>

                            <Typography component="p">
                                I hold a Master's degree in Family Therapy and am a registered member of the
                                Australian Counselling Association. My specializations include anxiety and depression
                                treatment, relationship counselling, family dynamics, and trauma-informed care.
                            </Typography>

                            <Typography component="p">
                                Every person's journey is unique, and I believe in tailoring my therapeutic approach
                                to meet your specific needs and goals. Together, we'll work toward building resilience,
                                improving relationships, and fostering positive change in your life.
                            </Typography>
                        </Box>

                        <Grid container spacing={2} sx={{ mt: 4 }}>
                            <Grid item xs={12} sm={6}>
                                <Card sx={{ backgroundColor: 'grey.50' }}>
                                    <CardContent>
                                        <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600 }}>
                                            Qualifications
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Master of Family Therapy, ACA Registered
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Card sx={{ backgroundColor: 'grey.50' }}>
                                    <CardContent>
                                        <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600 }}>
                                            Experience
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            10+ years in counselling and therapy
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Box sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    aspectRatio: '4/5',
                                    backgroundColor: 'grey.100',
                                    borderRadius: 4,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Avatar sx={{ width: 120, height: 120, backgroundColor: 'grey.300' }}>
                                    <Person sx={{ fontSize: 60 }} />
                                </Avatar>
                            </Box>

                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -24,
                                    right: -24,
                                    width: 128,
                                    height: 128,
                                    backgroundColor: 'secondary.light',
                                    borderRadius: '50%',
                                    opacity: 0.6,
                                    zIndex: -1,
                                }}
                            />

                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: -24,
                                    left: -24,
                                    width: 96,
                                    height: 96,
                                    backgroundColor: 'primary.light',
                                    borderRadius: '50%',
                                    opacity: 0.4,
                                    zIndex: -1,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About

// src/components/Services.tsx
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Avatar,
} from '@mui/material'
import {
    Person,
    Group,
    Favorite,
    Shield,
} from '@mui/icons-material'

const Services = () => {
    const services = [
        {
            title: "Individual Counselling",
            description: "One-on-one sessions focused on personal growth, anxiety, depression, and life transitions.",
            icon: <Person sx={{ fontSize: 32 }} />
        },
        {
            title: "Family Therapy",
            description: "Supporting families to improve communication, resolve conflicts, and strengthen relationships.",
            icon: <Group sx={{ fontSize: 32 }} />
        },
        {
            title: "Couples Counselling",
            description: "Helping couples navigate relationship challenges and build stronger, healthier connections.",
            icon: <Favorite sx={{ fontSize: 32 }} />
        },
        {
            title: "Trauma-Informed Care",
            description: "Specialized support for those healing from trauma using evidence-based therapeutic approaches.",
            icon: <Shield sx={{ fontSize: 32 }} />
        }
    ]

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Box id="services" sx={{ py: { xs: 8, lg: 12 }, backgroundColor: 'grey.50' }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
                        Therapeutic Services
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: '1.125rem',
                            lineHeight: 1.6,
                        }}
                    >
                        I offer a range of specialized counselling and therapy services tailored to meet
                        your unique needs and support your journey toward wellbeing.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 4,
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Avatar
                                            sx={{
                                                backgroundColor: 'primary.50',
                                                color: 'primary.main',
                                                mr: 2,
                                                width: 56,
                                                height: 56,
                                            }}
                                        >
                                            {service.icon}
                                        </Avatar>
                                        <Typography variant="h4" component="h3" sx={{ fontWeight: 600 }}>
                                            {service.title}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.7 }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => handleNavClick('#contact')}
                        sx={{ px: 4, py: 2 }}
                    >
                        Schedule a Consultation
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Services

// src/components/Approach.tsx
import {
    Box,
    Container,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
} from '@mui/material'
import { FiberManualRecord, Favorite } from '@mui/icons-material'

const Approach = () => {
    const approaches = [
        {
            title: "Person-Centered",
            description: "Your unique experiences and perspectives guide our therapeutic journey together."
        },
        {
            title: "Evidence-Based",
            description: "Utilizing proven therapeutic modalities including CBT, DBT, and systemic approaches."
        },
        {
            title: "Culturally Sensitive",
            description: "Honoring diverse backgrounds and ensuring culturally appropriate care."
        },
        {
            title: "Collaborative",
            description: "Working together as partners in your healing and growth process."
        }
    ]

    return (
        <Box id="approach" sx={{ py: { xs: 8, lg: 12 }, backgroundColor: 'background.paper' }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
                            My Therapeutic Approach
                        </Typography>

                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                mb: 4,
                                color: 'text.secondary',
                                lineHeight: 1.7,
                                fontSize: '1.125rem',
                            }}
                        >
                            I believe that therapy is most effective when it feels safe, collaborative, and
                            tailored to your individual needs. My approach integrates various evidence-based
                            therapeutic modalities while maintaining a warm, non-judgmental environment where
                            you can explore, heal, and grow.
                        </Typography>

                        <List sx={{ '& .MuiListItem-root': { py: 1.5 } }}>
                            {approaches.map((approach, index) => (
                                <ListItem key={index} alignItems="flex-start" disableGutters>
                                    <ListItemIcon sx={{ mt: 1, minWidth: 24 }}>
                                        <FiberManualRecord
                                            sx={{
                                                fontSize: 8,
                                                color: 'primary.main',
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 0.5 }}>
                                                {approach.title}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body1" color="text.secondary">
                                                {approach.description}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #f6f7f6 0%, #fefefe 100%)',
                                borderRadius: 4,
                                p: 4,
                                height: 400,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Box>
                                <Avatar
                                    sx={{
                                        width: 96,
                                        height: 96,
                                        backgroundColor: 'primary.light',
                                        color: 'primary.main',
                                        mx: 'auto',
                                        mb: 3,
                                    }}
                                >
                                    <Favorite sx={{ fontSize: 48 }} />
                                </Avatar>
                                <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                                    Healing Through Connection
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Building trust and understanding in every session
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Approach

// src/components/Contact.tsx
'use client'

import { useState } from 'react'
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Alert,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import {
    Phone,
    Email,
    LocationOn,
    Schedule,
    Emergency,
} from '@mui/icons-material'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        setSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    const contactInfo = [
        {
            icon: <Phone />,
            title: "Phone",
            content: "+61 (0) 123 456 789"
        },
        {
            icon: <Email />,
            title: "Email",
            content: "hello@malkinew.com.au"
        },
        {
            icon: <LocationOn />,
            title: "Location",
            content: "Central Coast, NSW\nOnline sessions available"
        },
        {
            icon: <Schedule />,
            title: "Hours",
            content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM"
        }
    ]

    return (
        <Box id="contact" sx={{ py: { xs: 8, lg: 12 }, backgroundColor: 'grey.50' }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
                        Get In Touch
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: '1.125rem',
                            lineHeight: 1.6,
                        }}
                    >
                        Ready to take the first step? I'm here to support you on your journey.
                        Reach out to schedule a consultation or ask any questions you may have.
                    </Typography>
                </Box>

                <Grid container spacing={{ xs: 6, lg: 8 }}>
                    {/* Contact Information */}
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h3" component="h3" sx={{ mb: 4, fontWeight: 600 }}>
                            Contact Information
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            {contactInfo.map((info, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                    <Box
                                        sx={{
                                            mr: 2,
                                            mt: 0.5,
                                            color: 'primary.main',
                                        }}
                                    >
                                        {info.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 0.5 }}>
                                            {info.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{ whiteSpace: 'pre-line' }}
                                        >
                                            {info.content}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        <Card sx={{ backgroundColor: 'background.paper' }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Emergency sx={{ color: 'error.main', mr: 1 }} />
                                    <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                                        Emergency Support
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    If you're experiencing a mental health emergency, please contact:
                                </Typography>
                                <List dense>
                                    <ListItem disableGutters>
                                        <ListItemText
                                            primary="Lifeline: 13 11 14"
                                            primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                                        />
                                    </ListItem>
                                    <ListItem disableGutters>
                                        <ListItemText
                                            primary="Emergency: 000"
                                            primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                                        />
                                    </ListItem>
                                    <ListItem disableGutters>
                                        <ListItemText
                                            primary="Mental Health Crisis: 1800 011 511"
                                            primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} lg={6}>
                        <Card>
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="h3" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                                    Send a Message
                                </Typography>

                                {submitted && (
                                    <Alert severity="success" sx={{ mb: 3 }}>
                                        Thank you for your message! I'll get back to you within 24 hours.
                                    </Alert>
                                )}

                                <Box component="form" onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                multiline
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                                placeholder="Please tell me a bit about what you're looking for support with..."
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                fullWidth
                                                sx={{ py: 2 }}
                                                disabled={submitted}
                                            >
                                                {submitted ? 'Message Sent!' : 'Send Message'}
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ display: 'block', mt: 2 }}
                                    >
                                        * Required fields. Your information is kept strictly confidential.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Contact

// src/components/Footer.tsx
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material'

const Footer = () => {
    const handleNavClick = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.dark',
                color: 'white',
                py: 6,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {/* Brand */}
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h4"
                            component="h3"
                            sx={{
                                fontFamily: 'Merriweather, serif',
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Malki New
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'grey.200',
                                mb: 2,
                            }}
                        >
                            Counsellor & Family Therapist
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'grey.300',
                                lineHeight: 1.6,
                            }}
                        >
                            Providing compassionate, evidence-based counselling and family therapy
                            services to support your journey toward healing and growth.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                            Quick Links
                        </Typography>
                        <List dense>
                            {[
                                { name: 'About', href: '#about' },
                                { name: 'Services', href: '#services' },
                                { name: 'Approach', href: '#approach' },
                                { name: 'Contact', href: '#contact' },
                            ].map((link) => (
                                <ListItem key={link.name} disableGutters>
                                    <Link
                                        component="button"
                                        onClick={() => handleNavClick(link.href)}
                                        sx={{
                                            color: 'grey.300',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                            Get In Touch
                        </Typography>
                        <Box sx={{ color: 'grey.300', mb: 3 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                +61 (0) 123 456 789
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                hello@malkinew.com.au
                            </Typography>
                            <Typography variant="body2">
                                Central Coast, NSW
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>
                                Crisis Support
                            </Typography>
                            <Box sx={{ color: 'grey.300' }}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>
                                    Lifeline: 13 11 14
                                </Typography>
                                <Typography variant="body2">
                                    Emergency: 000
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, backgroundColor: 'grey.600' }} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" color="grey.300">
                        © 2025 Malki New. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Link
                            href="#"
                            sx={{
                                color: 'grey.300',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                '&:hover': {
                                    color: 'white',
                                },
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                color: 'grey.300',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                '&:hover': {
                                    color: 'white',
                                },
                            }}
                        >
                            Terms of Service
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer