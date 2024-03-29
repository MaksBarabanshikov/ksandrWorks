import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalFbSlice',
    initialState: {
        modalVisible: false,
        isOpen: true,
        isOpenProcess: false,
        step: 1,
        id: null
    },
    reducers: {
        openModalFB: state => {
            state.isOpen = true
        },
        closeModalFB: (state) => {
            state.isOpen = false
            state.step = 1
        },
        openModalProcess: state => {
            state.isOpenProcess = true
        },
        closeModalProcess: state => {
            state.isOpenProcess = false
        },
        openModal: state => {
            state.modalVisible = true
        },
        closeModal: state => {
            state.modalVisible = false
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
    closeModalProcess,
    openModalProcess
} = modalSlice.actions

export default modalSlice.reducer