import { Button, Link } from "@mui/material"

/*
    Params:
        href
        download
        disabled
        onClick
        icon
        content
*/

const CustomButton = (props) => {
    if (props.href) {
        return (
            <Link
                href={props.href}
                target="_blank"
                rel="noreferrer"
                download={props.download}
                sx={{
                        borderRadius: '100px',
                        margin: '20px',
                    }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '100px',
                        border: '2px solid #d8d8d8',
                        backgroundColor: 'black',
                        padding: '10px 20px',
                        '&:hover': {
                            backgroundColor: '#d8d8d8',
                            color: 'black !important'
                        },
                        '&.Mui-disabled': {
                            border: '2px solid #8f8f8f',
                            color: '#8f8f8f !important'
                        }
                    }}
                    startIcon={props.icon && <props.icon />}
                >
                    {props.content}
                </Button>
            </Link>
        )
    } else if (props.alert) {
        return (
            <Button
                variant="outlined"
                sx={{
                    borderRadius: '100px',
                    border: '2px solid #8f8f8f',
                    backgroundColor: 'black',
                    color: '#8f8f8f !important',
                    margin: '20px',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#8f8f8f',
                        color: 'black !important'
                    },
                    '&.Mui-disabled': {
                        border: '2px solid #8f8f8f',
                        color: '#8f8f8f !important'
                    }
                }}
                disabled={props.disabled}
                onClick={props.onClick}
                startIcon={props.icon && <props.icon />}
            >
                {props.content}
            </Button>
        )
    } else {
        return (
            <Button
                variant="outlined"
                sx={{
                    borderRadius: '100px',
                    border: '2px solid #d8d8d8',
                    backgroundColor: 'black',
                    margin: '20px',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#d8d8d8',
                        color: 'black !important'
                    },
                    '&.Mui-disabled': {
                        border: '2px solid #8f8f8f',
                        color: '#8f8f8f !important'
                    }
                }}
                disabled={props.disabled}
                onClick={props.onClick}
                startIcon={props.icon && <props.icon />}
            >
                {props.content}
            </Button>
        )
    }
}

export default CustomButton