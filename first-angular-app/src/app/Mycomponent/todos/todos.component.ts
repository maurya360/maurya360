import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  todos!: Todo[];
  localItem: string | null;

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }

    //create array
    this.todos = [] 
    

  }

  ngOnInit(): void {
  }

  //index delete 
  deleteTodo(todo: Todo) {
    console.log(todo);
    const ind = this.todos.indexOf(todo);
    this.todos.splice(ind, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
//addtodo 
  addtodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
