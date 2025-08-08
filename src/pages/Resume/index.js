import { Box, Divider, Link, Typography } from "@mui/material"
import CustomButton from "../../components/CustomButton"
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Resume = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                paddingBottom: '60px'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'black',
                    width: {xs:'90%', lg: '80%'},
                    borderRadius: '10px',
                    margin: 'auto',
                    paddingBottom: '60px',
                }}    
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: '40px'
                    }}
                >
                    <CustomButton content='Download' href='/static/resume/Zeliang_Yin_Resume.pdf' download={true} icon={DownloadIcon}/>
                </Box>
                <Box
                    sx={{
                        width: {xs:'90%', lg: '80%'},
                        margin: 'auto'
                    }}
                >
                    <Typography variant="h2" gutterBottom sx={{textAlign: 'center'}}>
                        Zeliang Yin
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{textAlign: 'center', display: {xs: 'none', md: 'block'}}}>
                        Los Angeles, CA&nbsp;|&nbsp;
                        Tel: (213)-691-4594&nbsp;|&nbsp;
                        <Link
                            href='mailto:charlieyin99@gmail.com'
                            sx={{
                                textDecorationColor:'white',
                                color: 'white'
                            }}
                        >
                            charlieyin99@gmail.com
                        </Link>&nbsp;|&nbsp;
                        <Link
                            href='https://www.linkedin.com/in/zeliang-yin/'
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                textDecorationColor:'white',
                                color: 'white'
                            }}
                        >
                            linkedin.com/in/zeliang-yin/
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'center', display: {xs: 'block', md: 'none'}}}>
                        Los Angeles, CA
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'center', display: {xs: 'block', md: 'none'}}}>
                        Tel: (213)-691-4594
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'center', display: {xs: 'block', md: 'none'}}}>
                        <Link
                            href='mailto:charlieyin99@gmail.com'
                            sx={{
                                textDecorationColor:'white',
                                color: 'white'
                            }}
                        >
                            charlieyin99@gmail.com
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{textAlign: 'center', display: {xs: 'block', md: 'none'}}}>
                        <Link
                            href='https://www.linkedin.com/in/zeliang-yin/'
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                textDecorationColor:'white',
                                color: 'white'
                            }}
                        >
                            linkedin.com/in/zeliang-yin/
                        </Link>
                    </Typography>

                    {/* Education */}
                    <Typography variant="h4" sx={{paddingTop: '20px',fontFamily: 'Baskervville SC'}}>
                        Education
                    </Typography>
                    <Divider sx={{borderColor: 'white'}}/>
                    <Box
                        sx={{
                            paddingTop: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="h6" gutterBottom>University of Southern California</Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>Los Angeles, California</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>M.S. in Computer Science, GPA: 3.95/4.0</i></Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Jan. 2023 – Dec. 2024 (Expected)</i></Typography>
                    </Box>
                    <Box
                        sx={{
                            paddingTop: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="h6" gutterBottom>Beijing Jiaotong University</Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>Beijing, China</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>B.S. in Computer Science and Technology, GPA: 3.74/4.0</i></Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Aug. 2017 – Jun. 2021</i></Typography>
                    </Box>

                    {/* Experience */}
                    <Typography variant="h4" sx={{paddingTop: '20px',fontFamily: 'Baskervville SC'}}>
                        Experience
                    </Typography>
                    <Divider sx={{borderColor: 'white'}}/>
                    <Box
                        sx={{
                            paddingTop: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="h6" gutterBottom>A Round Entertainment</Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>Jersey City, New Jersey</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Software Engineer Intern</i></Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Jul. 2024 – Present</i></Typography>
                    </Box>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Developed a mobile dating app Joopi using <b><u>Firebase</u></b>, <b><u>Node.js</u></b> and <b><u>React Native</u></b>.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Led a team to employ <b><u>Firebase</u></b> Authentication for user management and build a <b><u>NoSQL</u></b> database using <b><u>Firestore</u></b>.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Implemented personalized match using <b><u>Collaborative</u></b> Filtering with <b><u>Node.js</u></b>, increasing match accuracy by 20%.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Developed the front end with <b><u>React Native</u></b> and <b><u>Expo</u></b>, building some onboarding pages to optimize user experience.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Leveraged <b><u>Git</u></b> and <b><u>CI/CD pipelines</u></b> to optimize development workflows, leading to a 15% boost in productivity.
                    </Typography>
                    <Box
                        sx={{
                            paddingTop: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="h6" gutterBottom>Baixin Information Technology</Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>Taiyuan, China</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Software Engineer Intern</i></Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>May 2023 – Aug. 2023</i></Typography>
                    </Box>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Developed a Manufacturing Execution System (MES) using <b><u>Node.js</u></b>, boosting workflow and management efficiency.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Developed the backend with <b><u>Node.js</u></b> and <b><u>Express.js</u></b>, building RESTful APIs for employees on the production line.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Developed employee authentication and authorization with <b><u>JWT</u></b>, securing critical production data.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Deployed and managed the backend with <b><u>PM2</u></b> for process management, and enhanced system performance with <b><u>Nginx</u></b> by configuring a reverse proxy and HTTP caching, resulting in a 25% reduction in server load.
                    </Typography>
                    <Box
                        sx={{
                            paddingTop: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="h6" gutterBottom>Youli Information Technology</Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>Changsha, China</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Software Engineer</i></Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Jun. 2021 – Dec. 2022</i></Typography>
                    </Box>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Developed YouliOKR web app using <b><u>React</u></b> and <b><u>Spring Boot</u></b>, improving company objective management efficiency.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Developed the front end with <b><u>React</u></b> and <b><u>Material UI</u></b>, enhancing the user experience.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Developed the mobile version of YouliOKR using <u><b>WeChat SDK</b></u>, building a <u><b>WeChat mini-program</b></u> that  enhanced accessibility and convenience for mobile users, driving a 15% increase in user engagement.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Engineered the backend with <b><u>Spring Boot</u></b>, optimizing RESTful API performance and scalability, incorporating asynchronous processing and caching to reduce response times by 20%.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Implemented a Single Sign-On (SSO) service using <b><u>OAuth 2.0</u></b>, improving authentication and security protocols.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                        ●&nbsp;&nbsp;Implemented SQL mapping with <b><u>MyBatis</u></b> and database connection pooling with <b><u>Druid</u></b>, optimizing and monitoring SQL performance for efficient data handling and responsiveness, reducing query response times by 30%.
                    </Typography>

                    {/* Projects */}
                    <Typography variant="h4" sx={{paddingTop: '20px',fontFamily: 'Baskervville SC'}}>
                        Projects
                    </Typography>
                    <Divider sx={{borderColor: 'white'}}/>
                    <Box sx={{'&:hover':{cursor: 'pointer'}}} onClick={() => navigate('/projects/event-finder')}>
                        <Box
                            sx={{
                                paddingTop: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Typography variant="h6" gutterBottom>Web Application & Mobile App Development</Typography>
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Node.js, AngularJS, Android SDK</i></Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Event Finder Web Application & Android App</i></Typography>
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Jan. 2024 – May 2024</i></Typography>
                        </Box>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Developed the event search web application using <u><b>AngularJS</b></u>, employing HttpClientModule for <u><b>AJAX</b></u> calls to Google Maps, Spotify, Facebook, and Twitter APIs.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Ensured a responsive UI with <u><b>Bootstrap UI</b></u>, adapting the design to various screen sizes.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Engineered a robust backend with <u><b>Node.js</b></u> and <u><b>Express.js</b></u>, creating RESTful APIs and integrating <u><b>Axios</b></u> for API calls to TicketMaster, Spotify, and GoogleGeo.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Developed the Android app by using <u><b>Java</b></u>, <u><b>Android SDK</b></u>, and third-party libraries like Picasso and Volley.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Deployed the backend as a service on the <u><b>Google Cloud Platform</b></u> App Engine for scalable and reliable performance.
                        </Typography>
                    </Box>
                    <Box sx={{'&:hover':{cursor: 'pointer'}}} onClick={() => navigate('/projects/twist-topia')}>
                        <Box
                            sx={{
                                paddingTop: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Typography variant="h6" gutterBottom>Indie Game Development</Typography>
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>C#, Unity</i></Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>3D puzzle platformer with 2D perspective toggling mechanic</i></Typography>
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Aug. 2023 – Dec. 2023</i></Typography>
                        </Box>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Designed and developed a 3D puzzle platformer in <b><u>Unity</u></b> with an innovative 2D perspective toggling mechanic.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Designed and implemented core and support mechanics using <b><u>C#</u></b> scripts, and took a lead role in level design.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Led a team of 5 to complete the game, collaborating efficiently via <b><u>GitHub</u></b>.
                        </Typography>
                    </Box>
                    <Box sx={{'&:hover':{cursor: 'pointer'}}} onClick={() => navigate('/projects/balabala')}>
                        <Box
                            sx={{
                                paddingTop: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Typography variant="h6" gutterBottom>Mobile App Development</Typography>
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Flask, Android SDK</i></Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Online Video Android App with Real-time Bullet Comment System</i></Typography>
                            <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}><i>Jan. 2023 – May 2023</i></Typography>
                        </Box>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Developed the online video Android app with bullet comment system using <u><b>Java</b></u>, <u><b>Android SDK</b></u>.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Implemented the backend with <u><b>Python</b></u> and <u><b>Flask</b></u>, creating RESTful APIs for seamless app functionality.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Established a cloud-based <u><b>MySQL</b></u> database to store video and user information, ensuring efficient content access.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Utilized <u><b>Python</b></u> to retrieve every day's Top 50 videos automatically and update the information in the database.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{paddingLeft: '3%'}}>
                            ●&nbsp;&nbsp;Led a cohesive team of 3, driving effective collaboration and successful app completion through <u><b>GitHub</b></u>.
                        </Typography>
                    </Box>

                    {/* Skills */}
                    <Typography variant="h4" sx={{paddingTop: '20px',fontFamily: 'Baskervville SC'}}>
                        Skills
                    </Typography>
                    <Divider sx={{borderColor: 'white'}}/>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '2%'}}>
                        <b><u>Languages</u></b>: Java, HTML/CSS, JavaScript, SQL, Python, C#, C/C++, Shell
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '2%'}}>
                        <b><u>Frameworks</u></b>: Spring Boot, MyBatis, Node.js, Express.js, Flask, AngularJS, Bootstrap, React, React Native
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '2%'}}>
                        <b><u>Databases</u></b>: MySQL, Firebase, MongoDB, DynamoDB
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{paddingLeft: '2%'}}>
                        <b><u>Others</u></b>: Git, AWS, Google Cloud Platform, Nginx, PM2, JWT, Druid, Hadoop, Spark, Android Studio, VS Code, Visual Studio, PyCharm, IntelliJ IDEA, Unity, Docker
                    </Typography>
                </Box>

            </Box>

        </Box>
    )
}

export default Resume