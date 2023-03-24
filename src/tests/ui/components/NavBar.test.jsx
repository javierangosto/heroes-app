import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth";
import { Navbar } from "../../../ui";

const mockedUseNavigate = jest.fn();

//jest.requireActual('react-router-dom') 
//devuelve todo lo que el componente que esté entre parentesis use

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en NavBar', () => {
        
    const contextValue = { 
        logged: true, 
        user: { id: 1, name:'Javier Angosto' },
        logout: jest.fn(), 
    };

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe aparecer el nombre de usuario si está logueado', () => {

        render(
            <AuthContext.Provider value = { contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>

        );

        expect( screen.getByText('Javier Angosto')).toBeTruthy();        

    })

    test('Debe de llamar al logout con el argumento en navigate de /login y replace = true', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value = { contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>

        );
        
        const logoutBtn = screen.getByRole('button',{ name: 'Logout' });
        fireEvent.click( logoutBtn );

        expect ( contextValue.logout ).toHaveBeenCalled();
        expect ( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});           

    })

})