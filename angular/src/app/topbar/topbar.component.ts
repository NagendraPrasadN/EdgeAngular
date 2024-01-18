import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  menus:IMenus[];
  constructor() { }

  ngOnInit(): void {
    this.menus = [{name:'Home',icon:'fa fa-home',hide:false},{name:'Notify',icon:'fa fa-calendar',hide:false},{name:'Product',icon:'fa fa-car',hide:false},{name:'Letter',icon:'fa fa-envelope',hide:false},{name:'Time Series',icon:'fa fa-clock',hide:false},{name:'Home',icon:'fa fa-home',hide:false}]
  }

}

interface IMenus {
  name: string;
  icon: string;
  hide: boolean;
}

