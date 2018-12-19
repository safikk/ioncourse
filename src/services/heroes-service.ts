import { Hero } from "../models/Hero";

export class HeroesService {
    heroesList: Hero[] = [
        {
            name: 'Superman',
            description: [
                'Ne suporte pas le kryptonite',
                'Est copain avec Batman de temps en temps'
            ],
            isInCombat: false,
        },
        {
            name: 'The Joker',
            description: [
                'Ennemie de Batman',
                'Meurtrié de Gotham City'
            ],
            isInCombat: true,
        },

        {
            name: 'Felix The Cat',
            description: [
                'A 7 vies',
                'Attaque avec des griffes'
            ],
            isInCombat: false,
        }
    ]; 
}