import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edge-summary',
  templateUrl: './edge-summary.component.html',
  styleUrls: ['./edge-summary.component.css']
})
export class EdgeSummaryComponent implements OnInit {

  @Input() countNameList:any = [{name: 'Intents', value:'18',type:'default'},{name: 'Entities', value:'256',type:'default'},{name: 'Documents', value:'12',type:'default'},{name: 'Sentences Identified', value:'232',type:'default'}];
  @Output() summaryTileDetails = new EventEmitter();


  @Output() timeFrameChanged = new EventEmitter();

  summaryTimeParams: { label: string; disabled: boolean; formControl: any; hidden: boolean; id: string; required: boolean; data: { name: string; value: string; }[]; margin: string; title: string; singleSelection: boolean; enableSearchFilter: boolean; addNewItemOnFilter: boolean; validationMessage: string; text: string; image: boolean; primaryKey: string; autoSelect: boolean; labelKey: string; searchBy: string; initialOption: { name: string; value: string; }[]; };
  width = 100;
  constructor() { }

  ngOnInit(): void {
    this.width=100/this.countNameList.length;

  }
}