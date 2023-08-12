import {createSlice,PayloadAction} from '@reduxjs/toolkit'


type InitialState = {
    value:AuthState;
}

type AuthState = {
    isAuth: boolean;
    username:string;
    uid:string;
    isModerator:boolean;
}

const initialState = {
    value:{
        isAuth:false,
        username: "",
        uid:"",
        isModerator:false
    } as AuthState,
} as InitialState;

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut:() => initialState,
        logIn:(state,action:PayloadAction<string>)=>{ // state has no use here
            return {
                value:{
                    isAuth:true,
                    username:action.payload,
                    uid:"BHG-HUI-DXS-DYU",
                    isModerator:false
                }
            }
        },
        toggleModerator:(state)=>{ // no action payload as we are not sending any data
            state.value.isModerator = !state.value.isModerator
        }
    }
});

export const {logIn,logOut,toggleModerator} = auth.actions;
export default auth.reducer;