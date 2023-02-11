import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authUser} from "@/libs/types/api/userTypes";

interface UserState {
    user:authUser | null
}

const initialState: UserState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<authUser>) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null
        }
    }
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer