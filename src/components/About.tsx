'use client'
import {Avatar, Box, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {Person} from "@mui/icons-material";
import Image from "next/image";

const About = () => {
    return (
        <Box id="about" sx={{ py: { xs: 8, lg: 12 }, backgroundColor: 'background.paper' }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
                            Professional Profile
                        </Typography>

                        <Box sx={{ '& > p': { mb: 2, color: 'text.secondary', fontSize: '1.125rem', lineHeight: 1.7 } }}>
                            <Typography component="p">
                                I am a highly experienced counsellor and family therapist in private practice.
                            </Typography>

                            <Typography component="p">
                                My experience includes working for 16 years in the counselling team at Jewish Care Victoria in Melbourne.
                            </Typography>

                            <Typography component="p">
                                My passion is to understand and help people.
                                I believe that authenticity and empathy are the most important skills of a therapist.
                                In my practice, I provide a safe, respectful and confidential environment which allows my clients to experience a healing & supportive relationship during counselling.
                                I encourage my clients to actively participate in the counselling process by setting goals and building on their strengths.
                            </Typography>

                            <Typography component="p">
                                Although everyone has their own coping strategies to manage life's challenges, it is often beneficial to get professional help.
                                A counsellor can help clients gain clarity and insight into the issues they are struggling with.
                                Counselling can help clients develop strategies to build resilience and move forward positively in their lives.
                            </Typography>

                            <Typography component="p">
                                In my practice, I see individuals, couples and families.
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
                                    backgroundColor: 'grey.50',
                                    borderRadius: 1,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Avatar
                                    sx={{ width: 300, height: 300 }}
                                    src={'/avatar.jpg'}
                                    alt={'Malki New Avatar Image'}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About;