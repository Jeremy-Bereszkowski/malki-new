'use client'
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
                            My therapeutic style centers on authenticity, empathy and trust, which allows clients to experience a healing and supportive relationship. I am committed to creating a safe, respectful and confidential space where my clients feel genuinely heard and understood. I encourage my clients to actively participate in the counselling process by setting goals and building on their strengths. I use an eclectic approach to therapy which involves assessing what framework and techniques work best for each individual, couple and family.
                        </Typography>


                        {/*<List sx={{ '& .MuiListItem-root': { py: 1.5 } }}>*/}
                        {/*    {approaches.map((approach, index) => (*/}
                        {/*        <ListItem key={index} alignItems="flex-start" disableGutters>*/}
                        {/*            <ListItemIcon sx={{ mt: 1, minWidth: 24 }}>*/}
                        {/*                <FiberManualRecord*/}
                        {/*                    sx={{*/}
                        {/*                        fontSize: 8,*/}
                        {/*                        color: 'primary.main',*/}
                        {/*                    }}*/}
                        {/*                />*/}
                        {/*            </ListItemIcon>*/}
                        {/*            <ListItemText*/}
                        {/*                primary={*/}
                        {/*                    <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 0.5 }}>*/}
                        {/*                        {approach.title}*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*                secondary={*/}
                        {/*                    <Typography variant="body1" color="text.secondary">*/}
                        {/*                        {approach.description}*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </ListItem>*/}
                        {/*    ))}*/}
                        {/*</List>*/}
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