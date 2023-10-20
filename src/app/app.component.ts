import { Component } from '@angular/core';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  constructor(public dialog: MatDialog){
    }

    openDialog():void {
      this.dialog.open(MyDialogComponent)
  }
}
