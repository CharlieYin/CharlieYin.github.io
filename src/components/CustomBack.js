import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const CustomBack = (props) => {
    return (
        <ArrowBackIcon
            sx={{
                color: 'white',
                width: '50px',
                height: '50px',
                position: 'absolute',
                transform: 'Translate(20%, -100%)'
            }}
            onClick={props.onClick}
        />
    )
}

export default CustomBack