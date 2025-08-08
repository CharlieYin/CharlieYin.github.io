import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import CustomAlert from '../../../components/CustomAlert'
import CustomBack from '../../../components/CustomBack'
import CustomButton from '../../../components/CustomButton'
import CustomImage from '../../../components/CustomImage'
import { useEffect, useRef, useState } from "react"
import twistTopia from '../../../assets/projects/twist-topia.jpg'
import perspectiveToggle from '../../../assets/projects/twist-topia-perspective-toggle.gif'
import keypon from '../../../assets/projects/twist-topia-keypon.gif'
import frame from '../../../assets/projects/twist-topia-frame.gif'
import landmine from '../../../assets/projects/twist-topia-landmine.gif'
import circuit from '../../../assets/projects/twist-topia-circuit.gif'
import rotatablePlatform from '../../../assets/projects/twist-topia-rotatable-platform.gif'

const TwistTopia = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get platform info
    let platformAvailable = false
        const userAgent = navigator.userAgent
    const getPlatformAvailable = () => {
        platformAvailable = /Windows|Mac/.test(userAgent)
        platformAvailable = !(/Android|iPhone|iPad|iPod/.test(userAgent))
    }
    getPlatformAvailable()


    // PC will navigate to game gape
    const navigate = useNavigate()
    const handlePlayPC = () => {
        navigate('/projects/twist-topia/game')
    }

    // Mobile will show alert
    const [alertShow, setAlertShow] = useState(false)
    const handlePlayMobile = () => {
        setAlertShow(true)
    }
    const alertTimeout = useRef()
    useEffect(()=> {
        if (alertShow) {
            clearTimeout(alertTimeout.current)
            alertTimeout.current = setTimeout(() => {
                setAlertShow(false)
            }, 3000)
        }

        return () => clearTimeout(alertTimeout.current)
    }, [alertShow])

    return (
        <Box sx={{width: '100%'}}>
            <CustomBack onClick={() => navigate('/projects')}/>
            <CustomAlert severity="warning" alertShow={alertShow} content='The game is only available on computer!'/>
            <Typography variant="h2" gutterBottom sx={{textAlign: 'center'}}>
                Twist Topia
            </Typography>
            <Typography variant="h5" gutterBottom sx={{textAlign: 'center'}}>
                Indie Game
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'black',
                    padding: '40px 10%',
                }}
            >
                <CustomImage src={twistTopia} alt={'twist topia'}/>
                <Typography variant="h6" gutterBottom sx={{textAlign: 'center'}}>
                    Twist Topia is a 3D puzzle platformer with 2D perspective toggling mechanic and other puzzle mechanics.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        paddingBottom: '40px'
                    }}
                >
                    <CustomButton content='View Prototype Video' href='https://youtu.be/LtFFzwg6hy8?si=mJ_jzUwnP8GLkWW3'/>
                    {platformAvailable ? (
                        <CustomButton content='Play Game' onClick={handlePlayPC}/>
                    ) : (
                        <CustomButton content='Play Game' alert={true} onClick={handlePlayMobile}/>
                    )}
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Game Description
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Twist Topia is an amazing world. This is a 3D world, but players can only play under 2D perspectives. Players can toggle the perspectives between front view and top-down view, which can connect or disconnect some parts of the world. Players should use this technic to find the right way to the end.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        As the game goes on, there'll be lots of interesting and exciting chanllenges. Players will meet enemies and all kinds of props. Each prop has its own unique ability. Some are available under the front view, and others are available under the top-down view. Players can use the props with the technic of toggling perspectives to fight with enemies and solve the puzzle.
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Responsibilities & Contributions
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Designed and implemented the core mechanic: <u><b>"Perspective toggling"</b></u>, making the disconnected platforms "connected" under 2D perspectives.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Designed and implemented the supporting mechanic: <u><b>"Frame"</b></u>, making players interact with enemies in many ways under the front view.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Designed and implemented the supporting mechanic: <u><b>"Landmine"</b></u>. Players can pick up and setup the landmines to kill the enemies under the top-down view.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Designed and implemented the supporting mechanic: <u><b>"Rotatable platform"</b></u>. Players can use the control console to rotate some platforms in all four directions to "connect" the platforms.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Designed and implemented the enemy: <u><b>"Guard"</b></u>. The guards will chase the players in the guarding area.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Designed plenty of <u><b>puzzles</b></u> about "Perspective toggling" and other supporting mechanics.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Constructed most <u><b>models</b></u>, including the platform and all the props.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;Led a team of 5 to complete the game, collaborating effectively via <u><b>GitHub</b></u>.
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Tech Stack
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;C#
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;Unity
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        ●&nbsp;&nbsp;GitHub
                    </Typography>
                </Box>
                <Box sx={{paddingBottom: '60px'}}>
                    <Typography variant="h4" gutterBottom>
                        Game Highlights
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Perspective Toggling.</b></u> Players can press Space to toggle perspectives, which can make some disconnected platforms "connected" and form a path under 2D perspective.
                    </Typography>
                    <CustomImage src={perspectiveToggle} alt={'twist topia perspective toggle'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Dual-View Prop: Keypon.</b></u> Under the top-down view, the keypon is a sword (weapon) which can kill the enemies. Under the front view, the keypon is a key to unlock the gate.
                    </Typography>
                    <CustomImage src={keypon} alt={'twist topia keypon'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Single-View Props: Frame and Landmine.</b></u> Under the front view, players can use Frame to trap an enemy and release it at another place. The enemy can kill another enemy if players release it at right place. Under the top-down view, players can setup the landmines to kill the enemies. The landmines only work under the top-down view. And the players can also be killed by the landmines.
                    </Typography>
                    <CustomImage src={frame} alt={'twist topia frame'} />
                    <CustomImage src={landmine} alt={'twist topia landmine'} />
                    <Typography variant="body1" gutterBottom>
                        ●&nbsp;&nbsp;<u><b>Terrain control consoles: Circuit and Rotatable Platfrom.</b></u> Players can rotate the circuit blocks under one perspective and connect them under the other perspective. If the circuit is connected correctly, there'll be new platforms. For the rotatable platforms, players can use the control console to rotate the special platforms in all four directions to make a new path.
                    </Typography>
                    <CustomImage src={circuit} alt={'twist topia circuit'} />
                    <CustomImage src={rotatablePlatform} alt={'twist topia rotatable platform'} />
                </Box>
            </Box>
        </Box>
    )
}

export default TwistTopia