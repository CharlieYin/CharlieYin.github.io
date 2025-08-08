import { Box, Typography } from "@mui/material"
import React, { Fragment, useEffect } from "react"
import { Unity, useUnityContext } from "react-unity-webgl"
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import CustomBack from '../../../components/CustomBack'
import CustomButton from "../../../components/CustomButton"
import { useNavigate } from "react-router-dom"

const TwistTopiaGame = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let platformAvailable = false
        const userAgent = navigator.userAgent
    const getPlatformAvailable = () => {
        platformAvailable = /Windows|Mac/.test(userAgent)
        platformAvailable = !(/Android|iPhone|iPad|iPod/.test(userAgent))
    }
    getPlatformAvailable()

    const { unityProvider, loadingProgression, isLoaded, requestFullscreen } = useUnityContext({
        loaderUrl: "/static/projects/twist-topia/twist_topia.loader.js",
        dataUrl: "/static/projects/twist-topia/twist_topia.data",
        frameworkUrl: "/static/projects/twist-topia/twist_topia.framework.js",
        codeUrl: "/static/projects/twist-topia/twist_topia.wasm",
    })
    const handleClickEnterFullscreen = () => {
        requestFullscreen(true)
    }

    return (
        <Box sx={{width: '100%'}}>
            <CustomBack onClick={() => navigate('/projects/twist-topia')}/>
            <Typography variant="h2" gutterBottom sx={{textAlign: 'center'}}>
                Twist Topia
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'black',
                    paddingTop: '40px',
                    textAlign: 'center',
                    
                }}
            >
                {platformAvailable ? (
                    <Fragment>
                        <Box sx={{position: 'relative'}}>
                            <Typography
                                variant="h5"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    textAlign:'center',
                                    visibility: isLoaded ? "hidden" : "visible"
                                }}
                            >
                                Loading...&nbsp;&nbsp;&nbsp;{Math.round(loadingProgression * 100)}%
                            </Typography>
                            <Unity
                                unityProvider={unityProvider}
                                style={{
                                    width: '50%',
                                    aspectRatio: 16/9,
                                    visibility: isLoaded ? "visible" : "hidden"
                                }}
                            />
                        </Box>
                        <CustomButton content={'Fullscreen'} onClick={handleClickEnterFullscreen} icon={ZoomOutMapIcon} />
                    </Fragment>
                ) : (
                    <Fragment>
                        <Typography sx={{width: '80%', margin:'auto'}}>
                            The game is only available on computer!
                        </Typography>
                        <CustomButton content={'Back'} onClick={() => navigate('/projects/twist-topia')} />
                    </Fragment>
                )}
            </Box>
        </Box>
    )

}

export default TwistTopiaGame