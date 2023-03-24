import { useReducer } from "react";
import { AuthContext, AuthReducer } from "../";
import { types } from "../types/types";

const initialState = {
    logged: false,
}

const init = () =>{
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ( { children } ) => {

    const login = ( name = '' ) =>{

        const user = { id: 1, name, }        
        const action = { type: types.login, payload: user }

        localStorage.setItem('user', JSON.stringify( user) );

        dispatch(action)

    }

    const logout = () => {

        localStorage.removeItem( 'user' );
        const action = { type: types.logout }

        dispatch( action );

    }

    const [ authState, dispatch ] = useReducer ( AuthReducer, initialState, init )

    return (
      
        <AuthContext.Provider value = { { ...authState, login, logout } }>
            { children }
        </AuthContext.Provider>

    );
}
