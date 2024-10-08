import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroeService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel', desc: 'Marvel - Comics' }
  ];


  constructor(
    private HeroeService: HeroeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.HeroeService.getHeroById(id))
      ).subscribe(hero => {

        if (!hero) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero);

        return;
      })


  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    console.log(this.heroForm.valid);
    if (this.heroForm.invalid) return;


    if (this.currentHero.id) {
      this.HeroeService.updateHero(this.currentHero)
        .subscribe(hero => {
          //TODO: mostrar snackbar
          this.showSnackBar(`${hero.superhero} updated!`)
        });

      return;
    }

    this.HeroeService.addHero(this.currentHero)
      .subscribe(hero => {
        //TODO: mostrar snackbar, y navegar a /heores/edit/ hero.id
        this.router.navigate(['/heroes/edit', hero.id])
        this.showSnackBar(`${hero.superhero} created!`)
      });
  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
    .pipe(
      filter((result : boolean) => result === true),
      switchMap(() => this.HeroeService.deleteHeroById(this.currentHero.id) ),
      tap ( wasDeleted => console.log({wasDeleted})),
      filter((wasDeleted : boolean) => wasDeleted),
    )
    .subscribe(result => {
      this.router.navigate(['/heroes'])
    })
  }

  showSnackBar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500
    })
  }


}
