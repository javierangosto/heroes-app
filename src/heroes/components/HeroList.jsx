import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";


export const HeroList = ({ publisher }) => {

    //Con el useMemo solamente se ejecutará la función cuando cambie el publisher
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] ); 

    return (

        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    heroes.map( hero => (
                        <HeroCard 
                            key = { hero.id }  
                            { ...hero }
                        />
                    ))
                }
            </div>

        </>

        
    )
}
