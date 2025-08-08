import { Alert } from "@mui/material"

const CustomAlert = (props) => {
    return (
        <Alert
            severity={props.severity}
            sx={{
                width: '80%',
                left: '50%',
                transform: 'Translate(-50%, -100%)',
                position: 'fixed',
                zIndex: 1,
                display: props.alertShow ? 'flex' : 'none'
            }}
        >
            {props.content}
        </Alert>
    )
}

export default CustomAlert