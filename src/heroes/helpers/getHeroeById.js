import { heroes } from "../data"

export const getHeroeById = ( id ) => {
    return heroes.find( hero => hero.id === id);
}