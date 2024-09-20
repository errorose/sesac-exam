// [ Toolkit 사용 ]
import { createSlice } from "@reduxjs/toolkit";

// 슬라이스 객체 정의
const moneySlice = createSlice({
    name: 'money',
    initialState: {money: 0},
    reducers: {
        plus: (state, action) => {
            state.money += action.payload;
        },
        minus: (state, action) => {
            state.money -= action.payload;
        },
    },
});

export const {plus, minus} = moneySlice.actions;
export default moneySlice.reducer;