import { Box, Typography } from "@mui/material"
import CustomBack from "../../../components/CustomBack"
import CustomButton from "../../../components/CustomButton"
import CustomImage from '../../../components/CustomImage'
import { useNavigate } from "react-router-dom"
import eventFinder from '../../../assets/projects/event-finder.jpg'
import search from '../../../assets/projects/event-finder-search.gif'
import details from '../../../assets/projects/event-finder-details.gif'
import favorites from '../../../assets/projects/event-finder-favorites.gif'
import searchMobile from '../../../assets/projects/event-finder-search-mobile.gif'
import detailsMobile from '../../../assets/projects/event-finder-details-mobile.gif'
import favoritesMobile from '../../../assets/projects/event-finder-favorites-mobile.gif'
import { useEffect } from "react"


const EventFinder = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{width: '100%'}}>
            <CustomBack onClick={() => navigate('/projects')}/>
            <Typography variant="h2" gutterBottom sx={{textAlign: 'center'}}>
            Event Finder
            </Typography>
            <Typography variant="h5" gutterBottom sx={{textAlign: 'center'}}>
                Web Application & Android App
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'black',
                    padding: '40px 10%',
                }}
            >
                <CustomImage src={eventFinder} alt={'Event Finder'}/>
                <Typography variant="h6" gutterBottom sx={{textAlign: 'center'}}>
                    Event Finder provides ticket searching service for a wide range of live entertainment events.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        paddingBottom: '40px'
                    }}
                >
                    <CustomButton content='Visit Website' href='https://zeliangyin.com/event-finder'/>
                    <CustomButton content='View Android App Video' href='https://youtu.be/FsaOfsrN_bo?si=o4vy9DOsKcALCdXC' />
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Description
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Event Finder is a webpage that allows you to search for live entertainment event information. The result will be displayed in a tabular format. It will also provide ticket, artist and venue details. Event Finder also provides an Android app, which is convenient for mobile users.
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Responsibilities
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Developed the event search web application using <u><b>AngularJS</b></u>.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Employed HttpClientModule for <u><b>AJAX</b></u> calls to Google Maps, Spotify, Facebook, and Twitter APIs.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Ensured a responsive UI with <u><b>Bootstrap UI</b></u>, adapting the design to various screen sizes.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Engineered a robust backend with <u><b>Node.js</b></u> and <u><b>Express.js</b></u>, creating RESTful APIs and integrating <u><b>Axios</b></u> for API calls to TicketMaster, Spotify, and GoogleGeo.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Developed the Android app by using <u><b>Java</b></u>, <u><b>Android SDK</b></u>, and third-party libraries like Picasso and Volley.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Deployed the backend as a service on the <u><b>Google Cloud Platform</b></u> App Engine for scalable and reliable performance.
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Tech Stack
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;HTML / CSS
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;JavaScript
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;AngularJS
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Bootstrap UI
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Java
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Android SDK
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Node.js
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Express.js
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Google Cloud Platform
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Web Application Presentation
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Event Search.</b></u> Users can input the keyword and other limitations to search related events. The result will be displayed in a table below.
                    </Typography>
                    <CustomImage src={search} alt={'search'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Event Details.</b></u> Users can choose the event they are interested in, and more details will be displayed, including the tickets, artists and the venue.
                    </Typography>
                    <CustomImage src={details} alt={'details'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Favorites.</b></u> Users can add any event to their Favorites list. And the record will be stored locally for future check.
                    </Typography>
                    <CustomImage src={favorites} alt={'favorites'} />
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Android App Presentation
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Event Search.</b></u> Users can input the keyword and other limitations to search related events. The result will be displayed in a table below.
                    </Typography>
                    <CustomImage vertical={true} src={searchMobile} alt={'search mobile'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Event Details.</b></u> Users can choose the event they are interested in, and more details will be displayed, including the tickets, artists and the venue.
                    </Typography>
                    <CustomImage vertical={true} src={detailsMobile} alt={'details mobile'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Favorites.</b></u> Users can add any event to their Favorites list. And the record will be stored locally for future check.
                    </Typography>
                    <CustomImage vertical={true} src={favoritesMobile} alt={'favorites mobile'} />
                </Box>
            </Box>
        </Box>
    )

}

export default EventFinder