import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";



export const HeroPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    //Con el useMemo solamente se ejecutará la función cuando cambie el ID
    const hero = useMemo( () => getHeroeById( id ), [ id ]);
    const heroImageUrl = `/heroes/${ id }.jpg`;

    const handleNavigateBack = () =>{
        //-1 retrocede al sitio anterior
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img src={ heroImageUrl } alt={ hero.superhero } className="img-thumbnail" />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { hero.alterego }</li>
                    <li className="list-group-item"> <b>Publisher:</b> { hero.publisher }</li>
                    <li className="list-group-item"> <b>First appearance:</b> { hero.firstappearance }</li>
                </ul>
 
                <h5 className="mt-3"> Characters </h5>
                <p>{ hero.characters }</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ handleNavigateBack }
                >
                    { '<< Return' }
                </button>

            </div>

        </div>
    )
}