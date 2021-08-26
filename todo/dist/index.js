"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todoItem_1.TodoItem(1, "Call Musa"),
    new todoItem_1.TodoItem(2, "Pay fee", true),
    new todoItem_1.TodoItem(3, "Drop kids"),
    new todoItem_1.TodoItem(4, "Quran recite", true),
    new todoItem_1.TodoItem(5, "Attend meeting"),
];
let collection = new todoCollection_1.TodoCollection("Musa", todos);
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List ` +
        `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(true).forEach((item) => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer
        .prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    })
        .then((answers) => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
console.clear();
console.log(`${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete}
     items to do)`);
//console.log(`${collection.userName}'s Todo List`);
//let newId: number = collection.addTodo("Go for run");
//let todoItem: TodoItem = collection.getTodoById(newId);
//todoItem.printDetails();
//collection.addTodo(todoItem);
collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
