import { AppBar, Box,  Tab, Tabs, Toolbar, ThemeProvider, Link, styled } from "@mui/material"
import { useRef, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import './index.scss'
import theme from "../../theme"
import MenuIcon from '@mui/icons-material/Menu'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../../assets/logo.png'
import bgIndex from '../../assets/background-index.jpg'
import bgProjects from '../../assets/background-projects.jpg'
import bgLife from '../../assets/background-life.jpg'
import bgResume from '../../assets/background-resume.jpg'

const Layout = () => {
    const navigate = useNavigate()

    // Set background
    const location = useLocation()
    const path = location.pathname
    const getIndexFromPath = (path) => {
        if (path === '/') {
            return 0
        } else if (path.match(/^\/projects(\/(-|\w)+)*\/?$/)) {
            return 1
        }
        // } else if (path.match(/^\/resume\/?$/)) {
        //     return 2
        // }
        // }else if (path.match(/^\/life(\/(-|\w)+)*\/?$/)) {
        //     return 2
        // } else if (path.match(/^\/resume\/?$/)) {
        //     return 3
        // }
    }

    const index = getIndexFromPath(path)

    const bg = [bgIndex, bgProjects, bgLife, bgResume]


    // Customize tab
    const MenuTab = styled((props) => <Tab disableRipple {...props} />)({
        fontWeight: 'bold',
        fontSize: '20px',
        maxWidth: '100%',
        color: 'white'
    })


    // Drawer control
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const ref = useRef(null)

    return (
        <Box className='container' sx={{
            backgroundImage: `url(${bg[index]})`,
        }}>
            <AppBar sx={{backgroundColor: {xs: drawerOpen ? '#000000' : '#000000aa', sm: '#000000aa'}, transition: 'background-color 0.2s linear'}}>

                {/* Nav for large screen */}
                <Toolbar sx={{justifyContent: 'space-between', display: {xs: 'none', sm: 'flex'}}}>
                    <img className='logo' alt="logo" src={logo} />
                    <Box>
                        <Tabs
                            value={index}
                            TabIndicatorProps={{style: {display: 'none'}}}
                        >
                            <MenuTab label='Home' onClick={() => navigate('/')} />
                            <MenuTab label='Projects' onClick={() => navigate('/projects')} />
                            {/* <MenuTab label='Life' onClick={() => navigate('/life')} /> */}
                            {/* <MenuTab label='Resume' onClick={() => navigate('/resume')} /> */}
                        </Tabs>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Link 
                            href='https://www.linkedin.com/in/zeliang-yin/'
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                display: 'flex'
                            }}
                        >
                            <LinkedInIcon className="icon" sx={{height:'31px', width:'31px'}}/>
                        </Link>
                        <Link 
                            href='https://github.com/CharlieYin'
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                display: 'flex'
                            }}
                        >
                            <GitHubIcon className="icon" sx={{height:'26px', width:'26px'}}/>
                        </Link>
                    </Box>
                </Toolbar>

                {/* Nav for small screen */}
                <Toolbar ref={ref} sx={{justifyContent: 'space-between', display: {xs: 'flex', sm: 'none'}}}>
                    <MenuIcon className="icon" sx={{height:'45px', width:'45px'}} onClick={handleDrawerToggle}/>
                    <Box sx={{display:'flex'}}>
                        <img className='logo' alt="logo" src={logo} />
                        <Tabs
                            value={0}
                            TabIndicatorProps={{style: {display: 'none'}}}>
                            <MenuTab
                                sx={{'&.Mui-selected':{color:'white'}}}
                                // label={['Home', 'Projects', 'Life', 'Resume'].filter((data, idx) => idx === index)[0]}
                                label={['Home', 'Projects'].filter((data, idx) => idx === index)[0]}
                                onClick={() => {
                                    // navigate(['/', '/projects', '/life', '/resume'].filter((data, idx) => idx === index)[0])
                                    navigate(['/', '/projects'].filter((data, idx) => idx === index)[0])
                                    setDrawerOpen(false)
                                }}
                            />
                        </Tabs>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Link 
                            href='https://www.linkedin.com/in/zeliang-yin/'
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                display: 'flex'
                            }}
                        >
                            <LinkedInIcon className="icon" sx={{height:'31px', width:'31px'}}/>
                        </Link>
                        <Link 
                            href='https://github.com/CharlieYin'
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                display: 'flex'
                            }}
                        >
                            <GitHubIcon className="icon" sx={{height:'26px', width:'26px'}}/>
                        </Link>
                    </Box>
                </Toolbar>
                {/* Drawer */}
                <Box sx={{overflow: 'hidden', maxHeight: {xs: drawerOpen ? '196px' : '0px', sm: '0px'}, transition: 'max-height 0.2s linear'}}>
                    <Tabs
                        orientation="vertical"
                        value={index}
                        TabIndicatorProps={{style: {display: 'none'}}}
                    >
                        <MenuTab label='Home' onClick={() => {
                            navigate('/')
                            setDrawerOpen(false)
                        }} />
                        <MenuTab label='Projects' onClick={() => {
                            navigate('/projects')
                            setDrawerOpen(false)
                        }} />
                        {/* <MenuTab label='Life' onClick={() => {
                            navigate('/life')
                            setDrawerOpen(false)
                        }} /> */}
                        {/* <MenuTab label='Resume' onClick={() => {
                            navigate('/resume')
                            setDrawerOpen(false)
                        }} /> */}
                    </Tabs>
                </Box>
            </AppBar>
            
            <Box className='content'>
                <ThemeProvider theme={theme}>
                    <Outlet />
                </ThemeProvider>
            </Box>
        </Box>
    )
}

export default Layout