'use client'
import {
    Box,
    Container,
    Typography,
    Grid,
    Link
} from '@mui/material'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 6,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent={'space-between'}>
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
                                color: 'grey.100',
                                mb: 2,
                            }}
                        >
                            Counsellor & Family Therapist
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'grey.200',
                                lineHeight: 1.6,
                            }}
                        >
                            Providing compassionate, evidence-based counselling and family therapy
                            services to support your journey toward healing and growth.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                            Get In Touch
                        </Typography>
                        <Box sx={{ color: 'grey.200', mb: 3 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <Link color={"#a3aca3"} href={"mailto:malki.new@gmail.com"}>
                                    malki.new@gmail.com
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;