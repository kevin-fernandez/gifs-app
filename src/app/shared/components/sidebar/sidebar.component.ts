import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor( private GifsService: GifsService ){}

  get tags(){
    return this.GifsService.tagsHistory;
  }

  public search(tag: string): void{
    this.GifsService.searchTag(tag);
  }


}
