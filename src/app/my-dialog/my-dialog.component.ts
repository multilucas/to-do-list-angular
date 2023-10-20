import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
    title = 'todo-list';

  constructor(public  dialogRef: MatDialogRef<MyDialogComponent>) {
  }
  fechar():void {
    this.dialogRef.close();
  }
}
