import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/std';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input() stdArr: Array<Istd> = []
  @Output() emitremoveobj: EventEmitter<Istd> = new EventEmitter<Istd>()
  @Output() emitEditobj: EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }

  onremove(std: Istd) {
    this.emitremoveobj.emit(std)
    // let getIndex=this.stdArr.findIndex(p=>p.id===std.id);
    // this.stdArr.splice(getIndex,1)
    // this.notification(`${std.fname} student removed successfully`)
  }
  onclickEdit(std: Istd) {
    this.emitEditobj.emit(std)
    console.log(std);
  }

}
