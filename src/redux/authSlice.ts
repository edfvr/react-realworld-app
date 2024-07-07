import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    user: {
        username: string;
        email: string;
        token: string;
    } | null;
    isAuthenticated: boolean;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ username: string; email: string; token: string }>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
