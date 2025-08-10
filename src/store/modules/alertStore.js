import { createSlice } from "@reduxjs/toolkit";

const alertStore = createSlice({
    name: 'alert',
    initialState: {
        count: 0,
        severity: 'success',
        content: ''
    },
    reducers: {
        show(state, action) {
            const { severity, content } = action.payload;
            state.count++
            state.severity = severity
            state.content = content
        },
        hide(state) {
            state.count = 0
        }
    }
})

const { show, hide } = alertStore.actions

const alertReducer = alertStore.reducer

export { show, hide }

export default alertReducer