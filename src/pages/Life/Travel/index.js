import { ImageList, ImageListItem, ImageListItemBar, ThemeProvider, Typography, styled, useMediaQuery } from "@mui/material"
import imgTravel from '../../../assets/travel.jpg'
import imgGame from '../../../assets/game.jpg'
import imgCook from '../../../assets/cook.jpg'
import Grid from "@mui/material/Grid2"
import theme from "../../../theme"

const CustomImageListItemBar = styled(ImageListItemBar)({
  '.MuiImageListItemBar-title': {
    lineHeight: 'inherit',
    wordWrap: 'break-word',
    whiteSpace: 'normal'
  },
});

const Travel = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)')
    return (
        <Grid container justifyContent='center' sx={{margin: '50px 0'}}>
            <Grid xs={10}>
            <ImageList variant="masonry" cols={isSmallScreen ? 1 : 2} gap={10}>
                <ImageListItem>
                    <img src={imgTravel} />
                    <CustomImageListItemBar position='below' title={
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3">
                                Test1Test1Test1Test1
                            </Typography>
                            <Typography variant="h5">
                                Test1Test1Test1Test1
                            </Typography>
                        </ThemeProvider>
                    }/>
                </ImageListItem>
                <ImageListItem>
                    <img src={imgGame} />
                </ImageListItem>
                <ImageListItem>
                    <img src={imgCook} />
                </ImageListItem>
            </ImageList>
            </Grid>
        </Grid>
    )
}

export default Travel