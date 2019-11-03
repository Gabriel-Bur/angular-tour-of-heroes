import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/models/hero';
import { HeroService } from 'src/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]

  selectedHero: Hero;

  constructor(private HeroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void{
    this.HeroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
