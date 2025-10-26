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
    const textBody1 = [
        'I am an experienced counsellor and family therapist in private practice. In my practice I see adult individuals, couples and families.',
        'I view therapy as a source of building resilience & adaptability under my approach to helping clients. I have a multicultural background, and I speak English, German and French.',
        'My experience included 16 years in the counselling team at Jewish Care Victoria, a social welfare organization in Melbourne, Australia, There I worked with a range of diverse client presentations.',
    ]
    const textBody2 = [
        'My passion is to understand and help clients. I have been described as having a calm, considered approach and I have been referred to as \'a safe pair of hands\'. My therapeutic style centers on authenticity, empathy and trust, which allows my clients to experience a healing and supportive relationship.',
        'I am committed to creating a safe, respectful and confidential space where my clients feel genuinely seen and heard. I encourage my clients to actively participate in the counselling process by setting goals and building on their strengths. I use an eclectic approach to therapy which involves assessing what framework and techniques work best for each individual client, couple and family.',
        'In my work with multicultural couples I don\'t take the role of an expert, I rather see myself as a mutual partner in exploring together the similarities and difference which can enhance the couple\'s relationship.',
        'Many people find that regular therapy sessions can enhance their quality of life, even when things are going well. It is an investment in personal growth and mental health. Just like regular checkups for physical health, mental health care is crucial for overall well-being. It can help build resilience, enhance coping strategies, help with decision making, improve emotional awareness and provide support both during challenging - and positive times.',
    ]
    const qualifications = [
        'Masters of Social Science - Family Therapy, Swinburne University Melbourne, Australia, 2012',
        'The Australian Association of Family Therapists (AAFT), 2006',
        'Graduate Diploma in Social Science - Family Therapy, Swinburne University Melbourne/Australia, 2003',
        'Postgraduate training in Psychoanalytical Psychotherapy with a member of the Société Belge de Psychanalyse de Bruxelles, 1988',
        'Diploma of Psychology, Psychotechnical Institute Antwerp/Belgium, 1985'
    ]
    const specialtiesCol1 = [
        'Anxiety/Depression',
        'Adaptation support for immigrants',
        'Aged care issues including Holocaust trauma 2nd & 3rd generation',
        'Carer support',
        'Dating support for singles & pre-marital counseling for engaged couples',
        'Grief and Loss',
    ]
    const specialtiesCol2 = [
        'Infertility and IVF treatment support',
        'Life transition & Menopause',
        'Parenting & step-parenting support',
        'Relationship issues including couples, family, friends',
        'Self-esteem, stress management, life/work balance',
    ]
    return (
        <Box id='about' sx={{ py: { xs: 8, lg: 12 }, backgroundColor: '#b4ebff' }}>
            <Container maxWidth='xl'>
                <Grid>
                    <Grid>
                        <Typography variant='h2' component='h2' sx={{ mb: 3, color: 'text.primary' }}>
                            Professional Profile
                        </Typography>
                    </Grid>
                    <Grid>
                        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems='center'>
                            <Grid item xs={12} lg={6}>
                                <Box sx={{ '& > p': { mb: 2, color: 'text.secondary', fontSize: '1.25rem', lineHeight: 1.7 } }}>
                                    {textBody1.map((text) => (
                                        <Typography key={text} component='p'>
                                            {text}
                                        </Typography>
                                    ))}
                                </Box>
                                <Typography variant='h4' component='h2' sx={{ mb: 3, color: 'text.primary' }}>
                                    My approach to therapy
                                </Typography>
                                <Box sx={{ '& > p': { mb: 2, color: 'text.secondary', fontSize: '1.25rem', lineHeight: 1.7 } }}>
                                    {textBody2.map((text) => (
                                        <Typography key={text} component='p'>
                                            {text}
                                        </Typography>
                                    ))}
                                </Box>
                                <Typography variant={'h6'} component={'p'}>
                                    You are welcome to an initial 15 minute free Zoom consultation, to establish together whether we are a good fit.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Box
                                    sx={{
                                        aspectRatio: '3/5',
                                        backgroundColor: '#b4ebff',
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
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid container spacing={2} sx={{ mt: 4 }}>
                            <Grid item xs={12} sm={12}>
                                <Card sx={{ backgroundColor: '#b4ebff' }}>
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
                                                            <Typography variant='body2' color='text.secondary' fontSize={'1.125rem'}>
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
                                <Card sx={{ backgroundColor: '#b4ebff' }}>
                                    <CardContent>
                                        <Typography variant='h6' component='h4' sx={{ fontWeight: 600 }}>
                                            Specialties
                                        </Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
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
                                                                    <Typography variant='body2' color='text.secondary' fontSize={'1.125rem'}>
                                                                        {specialty}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
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
                                                                    <Typography variant='body2' color='text.secondary' fontSize={'1.125rem'}>
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
                </Grid>
            </Container>
        </Box>
    )
}

export default About;