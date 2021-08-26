import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
  new TodoItem(1, "Call Musa"),
  new TodoItem(2, "Pay fee", true),
  new TodoItem(3, "Drop kids"),
  new TodoItem(4, "Quran recite", true),
  new TodoItem(5, "Attend meeting"),
];
let collection = new TodoCollection("Musa", todos);
let showCompleted = true;

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List ` +
      `(${collection.getItemCounts().incomplete} items to do)`
  );
  collection.getTodoItems(true).forEach((item) => item.printDetails());
  collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}
enum Commands {
  Toggle = "Show/Hide Completed",
  Quit = "Quit",
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands),
      //badProperty: true,
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Commands.Toggle:
          showCompleted = !showCompleted;
          promptUser();
          break;
      }
    });
}

promptUser();
/*
console.clear();
console.log(
  `${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete}
     items to do)`
);*/

//console.log(`${collection.userName}'s Todo List`);
//let newId: number = collection.addTodo("Go for run");
//let todoItem: TodoItem = collection.getTodoById(newId);
//todoItem.printDetails();
//collection.addTodo(todoItem);
collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
