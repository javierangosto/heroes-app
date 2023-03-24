import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { PrivateRoute } from '../../router'

describe('Pruebas en PublicRoute', () => { 

    test('Debe mostrar los hijos si está autenticado', () => {

        const contextValue = { logged: true, user: { id: 1, name:'Javier Angosto' } };

        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value = { contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']} >
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect ( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=batman");

    })

})