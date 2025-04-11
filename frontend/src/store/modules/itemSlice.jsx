import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    selectedOption: '',
    detailOption:'',
    menuColor:'',
    pageTitle:'',
}

const itemSlice = createSlice({
    name:'item',
    initialState,
    reducers: {
        changeItem(state,action){
            state.selectedOption=action.payload
        },
        changeDetail(state,action){
            state.detailOption=action.payload
        },
        changeColor(state,action){
            state.menuColor=action.payload
        },
        changePageTt(state,action){
            state.pageTitle=action.payload
        },
    }
})
export const {changeItem,changeDetail,changeColor, changePageTt} = itemSlice.actions
export default itemSlice.reducer