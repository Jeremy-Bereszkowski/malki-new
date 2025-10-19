'use client'
import {
    Box,
    Container,
    Typography,
    Grid,
    Avatar,
} from '@mui/material'

const Approach = () => {
    const approaches = [
        {
            title: 'Person-Centered',
            description: 'Your unique experiences and perspectives guide our therapeutic journey together.'
        },
        {
            title: 'Evidence-Based',
            description: 'Utilizing proven therapeutic modalities including CBT, DBT, and systemic approaches.'
        },
        {
            title: 'Culturally Sensitive',
            description: 'Honoring diverse backgrounds and ensuring culturally appropriate care.'
        },
        {
            title: 'Collaborative',
            description: 'Working together as partners in your healing and growth process.'
        }
    ]

    return (
        <Box id='approach' sx={{ py: { xs: 8, lg: 12 }, background: 'linear-gradient(0deg,rgba(231, 241, 241, 1) 0%, rgba(247, 252, 252, 1) 50%, rgba(231, 241, 241, 1) 100%)' }}>
            <Container maxWidth='xl'>
                <Grid container spacing={{ xs: 6, lg: 8 }} alignItems='center'>
                    <Grid item xs={12} lg={6}>
                        <Typography variant='h2' component='h2' sx={{ mb: 3, color: 'text.primary' }}>
                            My Therapeutic Approach
                        </Typography>

                        <Typography
                            variant='h6'
                            component='p'
                            sx={{
                                mb: 4,
                                color: 'text.secondary',
                                lineHeight: 1.7,
                                fontSize: '1.125rem',
                            }}
                        >
                            My therapeutic style centers on authenticity, empathy and trust, which allows clients to experience a healing and supportive relationship. I am committed to creating a safe, respectful and confidential space where my clients feel genuinely heard and understood. I encourage my clients to actively participate in the counselling process by setting goals and building on their strengths. I use an eclectic approach to therapy which involves assessing what framework and techniques work best for each individual, couple and family.
                        </Typography>
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
                                boxShadow: '0 2px 8px rgba(98, 112, 98, 0.1)'
                            }}
                        >
                            <Box>
                                <Typography variant='h4' component='h3' sx={{ mb: 2, fontWeight: 600 }}>
                                    Healing Through Connection
                                </Typography>
                                <Typography variant='body1' color='text.secondary'>
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