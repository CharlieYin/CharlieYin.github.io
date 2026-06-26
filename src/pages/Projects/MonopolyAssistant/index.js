import { Box } from "@mui/material"
import useLocalStorage from "../../../utils/useLocalStorage";
import { useEffect } from "react";
import CustomButton from "../../../components/CustomButton";

const MonopolyAssistant = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [gameId, setGameId, removeGameId] = useLocalStorage('monopoly.gameId')

    return (
        <Box sx={{width: '100%'}}>
            <CustomButton content={'New Game'} onClick={() => setGameId('G-' + Date.now())}/>
        </Box>
    )
}

export default MonopolyAssistant