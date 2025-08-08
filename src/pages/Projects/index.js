import Grid from "@mui/material/Grid2"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import imgTwistTopia from '../../assets/projects/twist-topia.jpg'
import imgEventFinder from '../../assets/projects/event-finder.jpg'
import imgBalabala from '../../assets/projects/balabala.jpg'

const CustomCard = (props) => {
    const navigate = useNavigate()

    const goToDetails = () => {
        navigate(props.item.path)
    }

    return (
        <Grid size={{xs: 12, md: 6}}>
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
                        sx={{aspectRatio: 16/9}}
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

    const data = [
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
            description: 'Online video platform with real-time bullet comment system.',
        }
    ]

    return (
        <Grid container size={10} spacing={12} sx={{paddingBottom: '60px'}}>
            {data.map((item, idx) => (
                <CustomCard key={idx} item={item}/>
            ))}
        </Grid>
    )
}

export default Projects