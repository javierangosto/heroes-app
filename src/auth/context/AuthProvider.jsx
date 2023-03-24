import { useReducer } from "react";
import { AuthContext, AuthReducer } from "../";
import { types } from "../types/types";

const initialState = {
    logged: false,
}

export const AuthProvider = ( { children } ) => {

    const login = async( name = '' ) =>{
        
        const action = {
            type: types.login,
            payload: {
                id: 1,
                name: name,
            }
        }

        dispatch(action)

    }

    const [ authState, dispatch ] = useReducer ( AuthReducer, initialState )

    return (
      
        <AuthContext.Provider value = { { ...authState, login: login } }>
            { children}
        </AuthContext.Provider>

    );
}
