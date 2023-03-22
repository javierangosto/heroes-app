import { heroes } from "../data"

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = [ 'DC Comics', 'Marvel Comics' ];

    if (! validPublishers.includes(publisher) )
        throw new Error (`Publisher ${ publisher } does not exist`);

    return heroes.filter( hero => hero.publisher === publisher );

}