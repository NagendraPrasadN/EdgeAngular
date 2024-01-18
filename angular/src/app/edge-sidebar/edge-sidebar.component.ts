import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edge-sidebar',
  templateUrl: './edge-sidebar.component.html',
  styleUrls: ['./edge-sidebar.component.css']
})
export class EdgeSidebarComponent implements OnInit {
  menuDetails:any = [];
  selectedTabIndex:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.menuDetails = [{icon:"fa fa-fw fa-home",name:"Home"},{icon:"fa fa-fw fa-wrench",name:"Wrench"},{icon:"fa fa-fw fa-user",name:"User"},{icon:"fa fa-fw fa-envelope",name:"Envelope"},{icon:"fa fa-fw fa-bell",name:"Notifier"},{icon:"fa fa-fw fa-calendar",name:"Calendar"},{icon:"fa fa-fw fa-car",name:"Product"}]
  }

}
