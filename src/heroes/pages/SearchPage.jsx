import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation(); //Location devuelve un objeto con la ruta actual, parametros, ...

    const { q = '' } = queryString.parse(location.search); //querystring devuelve un objeto con los parametros separado

    const heroes = getHeroByName( q );

    const showSearch = ( q.length === 0 );
    const showError = ( q.length > 0 && heroes.length === 0 );

    const { searchText, handleInputChange } = useForm({
        searchText: q,        
    });

    const handleSarchSubmit = ( event ) => {

        event.preventDefault();

        //si no se indica ruta en el navigate, por defecto navegará a la página actual
        navigate(`?q=${ searchText }`);

    }

    return (
        <>

            <h1>Search</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form onSubmit={ handleSarchSubmit }>
                        <input
                            type="text"
                            placeholder="Search a hero..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value = { searchText }
                            onChange = { handleInputChange }
                        / >
                        <button
                            className="btn btn-outline-primary mt-2"    
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>            
                    <hr/>

                    <div 
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? '' : 'none' }}
                    >
                        Search a hero
                    </div>

                    <div 
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: showError ? '' : 'none' }}
                    >
                        No hero with <b>{ q }</b>
                    </div>

                    {
                        heroes.map( hero => (
                            <HeroCard key = { hero.id } {...hero} />
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}