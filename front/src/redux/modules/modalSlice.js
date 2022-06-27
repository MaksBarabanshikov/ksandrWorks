import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalFbSlice',
    initialState: {
        isOpen: false,
        isOpenProcess: false,
        step: 1,
        id: null
    },
    reducers: {
        openModalFB: state => {
            state.isOpen = true
        },
        closeModalFB: state => {
            setTimeout(() => state.step = 1, 500)
            state.isOpen = false
        },
        openModalProcess: state => {
            state.isOpenProcess = true
        },
        closeModalProcess: state => {
            state.isOpenProcess = false
        },
        nextStep: state => {
            state.step++
        },
        setId: (state, action) => {
            state.id = action.payload
        }
    }
})

export const {
    openModalFB,
    closeModalFB,
    nextStep,
    resetStep,
    closeModalProcess,
    openModalProcess
} = modalSlice.actions

export default modalSlice.reducer