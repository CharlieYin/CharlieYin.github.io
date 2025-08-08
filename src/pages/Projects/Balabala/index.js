import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import CustomBack from "../../../components/CustomBack"
import CustomImage from '../../../components/CustomImage'
import balabala from '../../../assets/projects/balabala.jpg'
import videoList from '../../../assets/projects/balabala-video-list.gif'
import videoPlay from '../../../assets/projects/balabala-video-play.gif'
import bulletComment from '../../../assets/projects/balabala-bullet-comment.gif'
import { useEffect } from "react"



const Balabala = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{width: '100%'}}>
            <CustomBack onClick={() => navigate('/projects')}/>
            <Typography variant="h2" gutterBottom sx={{textAlign: 'center'}}>
                Balabala
            </Typography>
            <Typography variant="h5" gutterBottom sx={{textAlign: 'center'}}>
                Android App
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'black',
                    padding: '40px 10%',
                }}
            >
                <CustomImage src={balabala} alt={'balabala'}/>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        paddingBottom: '40px'
                    }}
                >
                    Balabala is an online video platform providing everyday's hottest videos with real-time bullet comments.
                </Typography>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Description
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Balabala is an online video platform. It provides and updates everyday's hottest videos for users. The video player supports real-time bullet comments, known as "danmaku". Comments appear directly on the video screen as it plays, creating a shared viewing experience.
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Responsibilities
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Developed the online video Android app with bullet comment system using <u><b>Java</b></u>, <u><b>Android SDK</b></u>, and some third-party libraries.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Implemented the backend with <u><b>Python</b></u> and <u><b>Flask</b></u>, creating RESTful APIs for seamless app functionality.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Established a cloud-based <u><b>MySQL</b></u> database to store video and user information, ensuring efficient content access.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Utilized <u><b>Python</b></u> to retrieve every day's Top 50 videos automatically from Bilibili and update the information in the database.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Led a cohesive team of 3, driving effective collaboration and successful app completion through <u><b>GitHub</b></u>.
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Tech Stack
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Java
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Android SDK
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Python
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Flask
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;MySQL
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;GitHub
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        App Presentation
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<b><u>Video List.</u></b> After users login, the app will display the list of the hottest videos. They can choose any video they are interested in.
                    </Typography>
                    <CustomImage vertical={true} src={videoList} alt={'video list'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<b><u>Video Play.</u></b> The video can be played in vertical mode and fullscreen mode, which is convenient for users in all kinds of circumstances. And the bullet comments can be displayed in both modes.
                    </Typography>
                    <CustomImage vertical={true} src={videoPlay} alt={'video play'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<b><u>Bullet Comment.</u></b> Users can sent bullet comments while watching videos. And the comments will be displayed on the video screen as it plays.
                    </Typography>
                    <CustomImage src={bulletComment} alt={'bullet comment'} />
                </Box>
            </Box>
        </Box>
    )
}

export default Balabala