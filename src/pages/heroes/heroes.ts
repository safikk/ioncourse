import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleHeroPage } from './single-hero/single-hero';
import { HeroesService } from '../../services/heroes-service';
import { Hero } from '../../models/Hero';

@Component({
    selector: 'page-heroes',
    templateUrl: 'heroes.html'
})

export class HeroesPage {

    heroesList: Hero[];


    constructor(private navCtrl: NavController,
                private heroesService: HeroesService) {}

    ionViewWillEnter() {
        this.heroesList = this.heroesService.heroesList.slice();
        
    }

    onLoadHero(i: number) {

        this.navCtrl.push(SingleHeroPage, { index: i })

    }
}