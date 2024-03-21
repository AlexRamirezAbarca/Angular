import { Component } from '@angular/core';
import { GifService } from '../../../gifs/components/search-box/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


constructor(private gifsService : GifService){}

get tags(){
  return this.gifsService.tagsHistory;
}



}
