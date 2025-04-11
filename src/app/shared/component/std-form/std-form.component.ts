import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Istd } from '../../model/std';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit, OnChanges {
  @ViewChild('stdForm') stdForm!: NgForm;
  // @Input() stdDataToEdit!:Istd;
  @Input() stdDataToEdit!: Istd;
  @Output() emitnewObj = new EventEmitter<Istd>()
  @Output() emitUodatedObj = new EventEmitter<Istd>()
  editMode: boolean = false;


  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  constructor() { }


  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stdDataToEdit']) {
      setTimeout(() => {
        if (this.stdForm && this.stdDataToEdit) {
          this.stdForm.setValue({
            fname: this.stdDataToEdit.fname || '',
            lname: this.stdDataToEdit.lname || '',
            email: this.stdDataToEdit.email || '',
            contact: this.stdDataToEdit.contact || '',
          });
          this.editMode = true;
        }
      }, 50);
    }
  }
  onsubmit() {
    if (this.stdForm.valid) {
      let newObj: Istd = this.stdForm.value;
      newObj.id = this.uuid()
      this.emitnewObj.emit(newObj)
      this.stdForm.reset()

    }

  }

  updateonclick() {
    if (this.stdForm && this.editMode) {
      const updatedObj: Istd = {
        ...this.stdForm.value,
        id: this.stdDataToEdit.id
      }
      this.emitUodatedObj.emit(updatedObj);


    }
  }

}