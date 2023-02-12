import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/libs/redux/user/userSlice'
import navBarReducer from '@/libs/redux/navBar/useSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        user: userReducer,
        navBar: navBarReducer,
    }
});

function useAppDispatch() {
    return useDispatch();

}

export { useAppDispatch }

export type RootState = ReturnType<typeof store.getState>
