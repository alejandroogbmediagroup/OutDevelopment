import superHeroes from '../data/heroes';
import { owners } from '../data/heroes'
//encontrar heroes por id
export const getHeroeById = (id) => superHeroes.find(hero => hero.id === id)
    //encontrar heroes poe casa de superheroes
export const getHeroesByOwner = (owner) => superHeroes.filter((hero) =>
    hero.owner === owner
)

import { getHeroeById, getHeroesByOwner } from './bases/impor-expor';