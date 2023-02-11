import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/libs/redux/user/userSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

function useAppDispatch() {
    return useDispatch();

}

export { useAppDispatch }

export type RootState = ReturnType<typeof store.getState>
