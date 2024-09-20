// [Tooolkit 사용]
import {configureStore} from "@reduxjs/toolkit";
import moneySlice from "./moneySlice";

// Store 생성
const store = configureStore({
    reducer: {
        money: moneySlice,
    }
});

export default store;