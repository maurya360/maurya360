import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() tododelete : EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    this.tododelete.emit(todo);
    console.log("i am click");
  }

}
