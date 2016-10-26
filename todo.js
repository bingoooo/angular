angular.module('todoApp', [])
	.controller('TodoListController', function(){
		var todoList = this;
		todoList.todos = [
			{text: "Learn Angular", done: true},
			{text: "Build an angular app", done: false}
		];
		todoList.addTodo = function(){
			todoList.todos.push({text: todoList.todoText, done: false});
			todoList.todoText = "";
		};
		todoList.remaining = function(){
			// Code here
		};
	});