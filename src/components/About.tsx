'use client'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Container,
    Grid, List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import {FiberManualRecord} from '@mui/icons-material';

const About = () => {
    const text = [
        'I am an experienced counsellor and family therapist in private practice. I speak English, German and French.',
        'In my practice I see adult individuals, couples and families. My experience inclues working for 16 years in the counselling team at Jewish Care Victoria, a social welfare organization in Melbourne, Australia, where I worked with a range of diverse client presentations.',
        'My passion is to understand and help people.',
        'I have been described as having a calm, considered approach and referred to as a \'safe pair of hands\'.'
    ]
    const qualifications = [
        'Masters of Social Science - Family Therapy, Swinburne University Melbourne, Australia, 2012',
        'Clinical member of the Australian Association of Family Therapists (AAFT), 2006',
        'Graduate Diploma in Social Science - Family Therapy, Swinburne University Melbourne/Australia, 2003',
        'Postgraduate training in Psychoanalytical Psychotherapy with a member of the Société Belge de Psychanalyse de Bruxelles, 1988',
        'Diploma of Psychology, Psychotechnical Institute Antwerp/Belgium, 1985'
    ]
    const specialtiesCol1 = [
        'Anxiety/Depression',
        'Adaptation support for immigrants',
        'Carer support',
        'Grief and Loss',
        'Life transition & Menopause',
        'Parenting & step-parenting support',
    ]
    const specialtiesCol2 = [
        'Aged care issues including Holocaust trauma 2nd & 3rd generation',
        'Infertility and IVF treatment support',
        'Relationship issues including couples, family, friends',
        'Dating support for singles & pre-marital counseling for engaged couples',
        'Self-esteem, stress management, life/work balance',
    ]
    return (
        <Box id='about' sx={{ py: { xs: 8, lg: 12 }, background: 'linear-gradient(0deg,rgba(231, 241, 241, 1) 0%, rgba(247, 252, 252, 1) 50%, rgba(231, 241, 241, 1) 100%)' }}>
            <Container maxWidth='xl'>
                <Grid container spacing={{ xs: 6, lg: 8 }} alignItems='center'>
                    <Grid item xs={12} lg={6}>
                        <Typography variant='h2' component='h2' sx={{ mb: 3, color: 'text.primary' }}>
                            Professional Profile
                        </Typography>

                        <Box sx={{ '& > p': { mb: 2, color: 'text.secondary', fontSize: '1.125rem', lineHeight: 1.7 } }}>
                            {text.map((text) => (
                                <Typography key={text}  component='p'>
                                    {text}
                                </Typography>
                            ))}
                        </Box>

                        <Grid container spacing={2} sx={{ mt: 4 }}>
                            <Grid item xs={12} sm={12}>
                                <Card sx={{ backgroundColor: 'grey.50' }}>

                                    <CardContent>
                                        <Typography variant='h6' component='h4' sx={{ fontWeight: 600 }}>
                                            Qualifications
                                        </Typography>
                                        <List sx={{ '& .MuiListItem-root': { py: 0 } }}>
                                            {qualifications.map((qualification) => (
                                                <ListItem key={qualification} alignItems='flex-start' disableGutters>
                                                    <ListItemIcon sx={{ pt: 0.25, mt: 1, minWidth: 24 }}>
                                                        <FiberManualRecord
                                                            sx={{
                                                                fontSize: 8,
                                                                color: 'primary.main',
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        secondary={
                                                            <Typography variant='body2' color='text.secondary'>
                                                                {qualification}
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Card sx={{ backgroundColor: 'grey.50' }}>
                                    <CardContent>
                                        <Typography variant='h6' component='h4' sx={{ fontWeight: 600 }}>
                                            Specialties
                                        </Typography>
                                        <Grid container spacing={2} sx={{ mt: 4 }}>
                                            <Grid item xs={12} sm={5}>
                                                <List sx={{ '& .MuiListItem-root': { py: 0 } }}>
                                                    {specialtiesCol1.map((specialty) => (
                                                        <ListItem key={specialty} alignItems='flex-start' disableGutters>
                                                            <ListItemIcon sx={{ pt: 0.25, mt: 1, minWidth: 24 }}>
                                                                <FiberManualRecord
                                                                    sx={{
                                                                        fontSize: 8,
                                                                        color: 'primary.main',
                                                                    }}
                                                                />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                secondary={
                                                                    <Typography variant='body2' color='text.secondary'>
                                                                        {specialty}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Grid>
                                            <Grid item xs={12} sm={7}>
                                                <List sx={{ '& .MuiListItem-root': { py: 0 } }}>
                                                    {specialtiesCol2.map((specialty) => (
                                                        <ListItem key={specialty} alignItems='flex-start' disableGutters>
                                                            <ListItemIcon sx={{ pt: 0.25, mt: 1, minWidth: 24 }}>
                                                                <FiberManualRecord
                                                                    sx={{
                                                                        fontSize: 8,
                                                                        color: 'primary.main',
                                                                    }}
                                                                />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                secondary={
                                                                    <Typography variant='body2' color='text.secondary'>
                                                                        {specialty}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Grid>
                                        </Grid>
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
                                    boxShadow: '0 2px 8px rgba(98, 112, 98, 0.1)'
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