import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrl: './common-table.component.css'
})
export class CommonTableComponent {

  @Input() tableColumn:any[]=[];
  @Input() tableData:any[]=[];
  data:any[]=[];
  @Input() tableHeading:string="";
  @Input() tableFooter:string="";
  searchText:string="";
  sortKey:string="id";
  sortDesc:boolean = false;
  selectAll:boolean = false;
  showFilter:boolean = false;
  @Input() tableWidth:string = '';
  @Input() tableHeight:string = '';

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  selected:any =[];
  updateSelected(){
    this.selected = this.tableData.filter(i => i.selected );
  }
  
  sort(key:string){
    if(this.sortKey !== key ){
      this.sortKey = key;
      this.sortDesc = false;
    }else{
      this.sortDesc = !this.sortDesc;
    }
  }

  toggleAll(){
      this.data.map(row => row.selected = this.selectAll);
  }

  close(){
    this.closeModal.emit();
  }
}
