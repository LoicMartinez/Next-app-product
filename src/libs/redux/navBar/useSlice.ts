import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/libs/redux/store";

interface NavBarState {
    location:string | null
}

const initialState: NavBarState = {
    location: null
}

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<string | null>) => {
            state.location = action.payload
        },
    }
})

export const { setLocation } = navBarSlice.actions

export default navBarSlice.reducer

export const selectLocation = (state: RootState) => state.navBar