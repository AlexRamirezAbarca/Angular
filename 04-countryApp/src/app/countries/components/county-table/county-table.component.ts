import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './county-table.component.html',
  styles: [
`
img{
  width: 25px;
}
`

  ]
})
export class CountyTableComponent {

  @Input()
  public countries : Country[] = []


}
