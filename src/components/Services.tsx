'use client'
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
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
            title: 'Individual Counselling',
            description: 'One–on–one sessions helping you gain increased self-understanding, develop fresh perspectives, uncover resilience and strengths, acquire  new tools & techniques for managing life’s challenges.',
            icon: <Person sx={{ fontSize: 32 }} />
        },
        {
            title: 'Family Therapy',
            description: 'Supporting families to improve communication, resolve conflicts, and strengthen relationships.',
            icon: <Group sx={{ fontSize: 32 }} />
        },
        {
            title: 'Couples Counselling',
            description: 'Helping couples navigate relationship challenges and build stronger, healthier connections.',
            icon: <Favorite sx={{ fontSize: 32 }} />
        },
        {
            title: 'Treatment Approach',
            description: 'I use an eclectic approach to therapy which involves assessing what framework and techniques work best with each individual client, couple and family. I incorporate Psychodynamic theory, Solution-Focused theory, Mindfulness techniques and Acceptance and Commitment Therapy (ACT).',
            icon: <Shield sx={{ fontSize: 32 }} />
        }
    ]

    return (
        <Box id='services' sx={{ py: { xs: 8, lg: 12 }, backgroundColor: '#b4ebff' }}>
            <Container maxWidth='xl'>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant='h2' component='h2' sx={{ mb: 3, color: 'text.primary' }}>
                        Therapeutic Services
                    </Typography>
                    <Typography
                        variant='h5'
                        component='p'
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            mb: 3,
                            fontSize: '1.125rem',
                            lineHeight: 1.6,
                        }}
                    >
                        I offer a range of specialized counselling and therapy services tailored to meet
                        your unique needs and support your journey toward wellbeing.
                    </Typography>
                    <Typography
                        variant='h5'
                        component='p'
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            mb: 3,
                            fontSize: '1.125rem',
                            lineHeight: 1.6,
                        }}
                    >
                        Fees for sessions can be on a sliding scale.
                    </Typography>
                    <Typography
                        variant='h5'
                        component='p'
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: '1.125rem',
                            lineHeight: 1.6,
                        }}
                    >
                        Zoom sessions available.
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
                                                backgroundColor: 'primary.light',
                                                color: 'primary.dark',
                                                mr: 2,
                                                width: 56,
                                                height: 56,
                                            }}
                                        >
                                            {service.icon}
                                        </Avatar>
                                        <Typography variant='h4' component='h3' sx={{ fontWeight: 600 }}>
                                            {service.title}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant='body1'
                                        color='text.secondary'
                                        sx={{ lineHeight: 1.7 }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Services