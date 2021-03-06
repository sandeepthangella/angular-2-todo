import { Injectable } from '@angular/core';
import {Init} from './init-todos';

@Injectable()
export class TodoService extends Init{

  constructor() {
    super(); 
    console.log('todo service initialized...');
    this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    //add new todo
    todos.push(newTodo);
    console.log("add todo"+newTodo);
    //set new todo
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'));

    for(var i=0;i< todos.length;i++){
      if(todoText == todos[i].text){
        todos.splice(i, 1);
      }
    }

    //Set new todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldText, newText){
    var todos = JSON.parse(localStorage.getItem('todos'));

    for(var i=0;i< todos.length;i++){
      if(oldText == todos[i].text){
        todos[i].text = newText;
      }
    }

    //Set new todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
