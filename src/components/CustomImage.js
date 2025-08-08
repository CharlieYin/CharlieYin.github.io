import { Box } from "@mui/material"

const CustomImage = (props) => {
    if (props.vertical) {
        return (
            <Box sx={{
                margin:'auto',
                width: {xs: '50%', sm: '40%', md: '30%', lg: '22.5%'},
                paddingBottom: '20px'
            }}>
                <img src={props.src} alt={props.alt} loading='lazy' style={{width: '100%', borderRadius: '15px'}}/>
            </Box>
        )
    }

    return (
        <Box sx={{
            margin:'auto',
            width: {xs: '90%', sm: '80%', md: '70%', lg: '55%'},
            paddingBottom: '20px'
        }}>
            <img src={props.src} alt={props.alt} loading='lazy' style={{width: '100%', borderRadius: '15px'}}/>
        </Box>
    )
}

export default CustomImage