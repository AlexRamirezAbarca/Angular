import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{


  constructor( private heroService : HeroeService,
              private activatedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroService.getHeroById(id))
    ).subscribe(hero => {
      if(!hero) return this.router.navigate(['/heroes.list'])
    })
  }

}
