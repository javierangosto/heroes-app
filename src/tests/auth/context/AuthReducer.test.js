import { AuthReducer, types } from '../../../auth'

describe('Pruebas en AuthReducer', () => {

    test('Debe devolver el estado por defecto', () => {

        const initialState = { logged: false };
        
        const state = AuthReducer(initialState, {});
        expect( state ).toEqual( initialState );
        

    });

    test('Debe de (login) llamar a login autenticar y establecer el user', () => {

        const userLogin = { id: 1, name: 'Javier Angosto' };
        const action = { type: types.login, payload: userLogin }

        const { logged, user } = AuthReducer({ logged:false }, action);
        
        expect ( logged ).toBeTruthy();
        expect ( user.name ).toBe('Javier Angosto');

    });

    test('Debe de (logout) borrar el name y logged false', () => {

        const state = { logged: true, user: { id: 1, name: 'Javier Angosto'} };
        const action = { type: types.logout }

        const { logged } = AuthReducer(state, action);

        console.log(AuthReducer({}, action));
        
        expect ( logged ).toBeFalsy();      

    });

})