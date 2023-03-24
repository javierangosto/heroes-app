import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth";
import { AppRouter } from "../../router"


describe('Pruebas en AppRouter', () => {

    test('Debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value = { contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>

        );

        expect( screen.getByRole('heading', {level: 1, name:'Login'} )).toBeTruthy();

    })
    
    
    test('Debe de mostrar el componente de Marvel si está autenticado', () => {

        
        const contextValue = { logged: true, user: { id: 1, name:'Javier Angosto' } };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value = { contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>

        );

        expect( screen.getByRole('heading', {level: 1, name:'Marvel Comics'} )).toBeTruthy();

    })

})