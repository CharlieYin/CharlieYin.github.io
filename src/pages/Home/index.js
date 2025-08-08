import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Grid container>
            <Grid size={7} offset={0.5}>
                <Box sx={{margin: '30px 0', wordWrap: 'break-word'}}>
                    <Typography variant="h1" gutterBottom>
                        Zeliang Yin
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        Software Developer
                    </Typography>
                    <Typography variant="h4">
                        A master's student in Computer Science at the University of Southern California (USC).
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home