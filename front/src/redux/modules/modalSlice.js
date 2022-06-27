import {createSlice} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

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
            state.isOpen = false
            setTimeout(() => state.step = 1, 500)
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