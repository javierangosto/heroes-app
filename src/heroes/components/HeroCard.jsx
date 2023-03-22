import { Link } from "react-router-dom";

const CharactersByHero = ( { alterego, characters }) => {

    return alterego === characters 
        ? <></> 
        : <p>{characters}</p>;

}

export const HeroCard = ({ 
    id, 
    superhero,
    publisher,
    alterego,
    firstappearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    return (
        <div className="col">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt = { superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alterego }</p>

                            <CharactersByHero characters={ characters } alterego = { alterego } />

                            <p className="card-text">
                                <small className="text-muted">{ firstappearance }</small>
                            </p>

                            <Link to={`/hero?id=${ id }`}>
                                Más...                            
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}



