import { heroes } from "../data";

export const getHeroByName = ( name ) => {
    if ( name.length === 0 ) return [];

    return heroes.filter( hero => 
        hero.superhero.toLocaleLowerCase().includes( name.toLocaleLowerCase().trim() )
    );
}