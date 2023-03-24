import { useReducer } from "react";
import { AuthContext, AuthReducer } from "../";

const initialState = {
    logger: false,
}

export const AuthProvider = ( { children } ) => {

    const [ authState, dispatch ] = useReducer ( AuthReducer, initialState )

    return (
      
        <AuthContext.Provider value = { { } }>
            { children}
        </AuthContext.Provider>

    );
}
