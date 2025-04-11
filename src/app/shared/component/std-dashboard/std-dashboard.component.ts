import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/std';
import { stdArrData } from '../../const/std';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {
  stdArr: Array<Istd> = stdArrData;
  stdDataEdit!: Istd;
  constructor(private _matsnakbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  notification(msg: string) {
    this._matsnakbar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  emitedobj(newObj: Istd) {
    this.stdArr.unshift(newObj)
    console.log(newObj)
    console.log(this.stdArr)
    this.notification(`${newObj.fname} student addedd successfully`)
  }

  onemitRem(std: Istd) {
    let getIndex = this.stdArr.findIndex(p => p.id === std.id);
    this.stdArr.splice(getIndex, 1)
    this.notification(`${std.fname} student Remove successfully`)
  }
  editdata(std: Istd) {
    console.log(std)
    this.stdDataEdit = std
    console.log(this.stdDataEdit)

  }

  UpdatedObj(updatedstd: Istd) {
    let index = this.stdArr.findIndex(p => p.id === updatedstd.id)
    this.stdArr[index] = updatedstd;
    this.notification(` ${updatedstd.fname} student Update Successfully`)
  }
}
