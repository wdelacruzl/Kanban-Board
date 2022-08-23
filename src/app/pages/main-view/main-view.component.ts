import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'; 
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {

  constructor() {}

  board: Board = new Board('Organization Board', [
    new Column('ideas', [
    "some randome idea",
    "random idea #2",
    "random idea #3"
  ]),
  new Column('Reasearch', [
    "Lorem ipsum",
    "foo",
    "random research"
  ]),
  new Column("Todo", [
    'Get to work',
    'Pick up groceries', 
    'Go home', 
    'Fall asleep'
  ]),
  new Column("Done",[
    'Get up', 
    'Brush teeth', 
    'Take a shower', 
    'Check e-mail', 
    'Walk dog'
  ])
]);

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
