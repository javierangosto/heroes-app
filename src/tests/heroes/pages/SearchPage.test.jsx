import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../heroes";
import { useForm } from "../../../hooks/useForm";

const initialForm = { searchText: '' };

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

beforeEach( () => {
    jest.clearAllMocks();
});

describe('Pruebas en SearchPage', () => {

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter >
                <SearchPage />
            </MemoryRouter>
        );

        expect ( container ).toMatchSnapshot();

    })

    test('debe mostrar a Batman y el input con el valor del queryString', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        expect( screen.getByRole( 'textbox', { value: 'batman' } )).toBeTruthy();
        expect( screen.getByRole( 'img', { value: 'batman' } )).toBeTruthy();
        
        const styleSearchDiv = screen.getByLabelText( 'divSearchHero').style.display;
        expect( styleSearchDiv ).toBe('none');

    })

    test('debe mostrar a Batman y el input con el valor del queryString', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const divSearchError = screen.getByLabelText( 'divSearchError' ).style.display;
        expect( divSearchError ).not.toBe('none');

    })

    test('debe de llamar el navigate a la pantalla nueva', () => {

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );  

        const input = screen.getByRole('textbox');
        fireEvent.change( input, ({ target: { name: 'searchText', value: 'superman' }}))

        const form = screen.getByLabelText('form');
        fireEvent.submit( form );

        expect ( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman');           

    })

})