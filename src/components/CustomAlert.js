import { Alert } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { hide } from '../store/modules/alertStore'
import { useEffect, useRef } from "react"


const CustomAlert = () => {
    const { count, severity, content } = useSelector(state => state.alert)
    const dispatch = useDispatch()
    const alertTimeout = useRef()
    useEffect(()=> {
        if (count > 0) {
            clearTimeout(alertTimeout.current)
            alertTimeout.current = setTimeout(() => {
                dispatch(hide())
            }, 3000)
        }

        return () => clearTimeout(alertTimeout.current)
    }, [dispatch, count])
    return (
        <Alert
            severity={severity}
            sx={{
                width: '80%',
                left: '50%',
                transform: 'Translate(-50%, -100%)',
                position: 'fixed',
                zIndex: 1,
                display: count > 0 ? 'flex' : 'none'
            }}
        >
            {content}
        </Alert>
    )
}

export default CustomAlert