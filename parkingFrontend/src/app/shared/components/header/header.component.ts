import { Component, Input, OnInit } from '@angular/core';
import { ItemNavbar } from 'src/app/core/interfaces/itemNavbar.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() itemNavbar !: ItemNavbar[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
