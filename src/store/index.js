import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./modules/alertStore";

const store = configureStore({
    reducer: {
        alert: alertReducer
    }
})

export default store