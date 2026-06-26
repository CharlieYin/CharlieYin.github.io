import Grid from "@mui/material/Grid2"
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import imgMonopolyAssistant from '../../assets/projects/monopoly-assistant.png'
import imgTwistTopia from '../../assets/projects/twist-topia.jpg'
import imgEventFinder from '../../assets/projects/event-finder.jpg'
import imgBalabala from '../../assets/projects/balabala.jpg'

const CustomCard = (props) => {
    const navigate = useNavigate()

    const goToDetails = () => {
        navigate(props.item.path)
    }

    return (
        <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{
                borderRadius: '10px',
                backgroundColor: '#27282e',
                transition: 'background-color 0.2s ease',
                '&:hover': {
                    backgroundColor: '#141414',
                },
                height: '100%'
            }}>
                <CardActionArea
                    onClick={goToDetails}
                >
                    {props.item.image && <CardMedia
                        component='img'
                        image={props.item.image}
                        sx={{ aspectRatio: 16 / 9 }}
                    />}
                    <CardContent>
                        {props.item.title && <Typography variant="h4" gutterBottom>
                            {props.item.title}
                        </Typography>}
                        {props.item.subtitle && <Typography variant="h6" gutterBottom>
                            {props.item.subtitle}
                        </Typography>}
                        {props.item.description && <Typography variant="body1" gutterBottom>
                            {props.item.description}
                        </Typography>}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    )
}

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const petProjects = [
        {
            path: '/projects/monopoly-assistant',
            image: imgMonopolyAssistant,
            title: 'Monopoly Assistant',
            description: 'Customize your monopoly board and rules, help you calculate and manage your money.',
        }
    ]

    const courseProjects = [
        {
            path: '/projects/event-finder',
            image: imgEventFinder,
            title: 'Event Finder',
            subtitle: 'Web Application & Android App',
            description: 'Provide event searching service for a wide range of live entertainment events.',
        },
        {
            path: '/projects/twist-topia',
            image: imgTwistTopia,
            title: 'Twist Topia',
            subtitle: 'Indie Game',
            description: '3D puzzle platformer with 2D perspective shifting mechanic.',
        },
        {
            path: '/projects/balabala',
            image: imgBalabala,
            title: 'Balabala',
            subtitle: 'Android App',
            description: 'Android video streaming app with bullet comment (danmaku) system.',
        }
    ]

    return (
        <Grid container size={10} spacing={8} sx={{ paddingBottom: '60px' }}>
            <Grid size={{ xs: 12 }} sx={{ marginBottom: '-30px' }}>
                <Typography variant="h4">
                    Pet Projects
                </Typography>
            </Grid>
            {petProjects.map((item, idx) => (
                <CustomCard key={idx} item={item} />
            ))}
            <Grid size={{ xs: 12 }} sx={{ marginBottom: '-30px' }}>
                <Typography variant="h4">
                    Course Projects
                </Typography>
            </Grid>
            {courseProjects.map((item, idx) => (
                <CustomCard key={idx} item={item} />
            ))}
        </Grid>
    )
}

export default Projects