import { createSlice } from "@reduxjs/toolkit";
const itemoptions = {
    '의류': {종류 : ['1', '2', '3', '4', '5'], 옵션 : ['a', 'b', 'c', 'd', 'e']},
    '스티커/지류' : {종류 : ['1', '2', '3', '4'], 옵션 : ['1', '2', '3']}
  }
  const initialStateValue = {location: "", itemtype: "", itemoptions: itemoptions['의류'], selectedOptions : {종류 : "", 옵션: ""}};
export const categorySlice = createSlice({
    name : "category",
    initialState: {value : initialStateValue},
    reducers: {
        setLocation : (state, action) => {
            state.value = action.payload
        },
        selectItemType : (state, action) => {
            state.value = action.payload
            state.value.itemoptions = itemoptions[action.payload.itemtype];
        },
        selectItemOption : (state, action) => {
            state.value.selectedOptions = {...state.value.selectedOptions, ...action.payload}
        }
    }
})

export const {selectItemType, selectItemOption ,setLocation} = categorySlice.actions;

export default categorySlice.reducer;