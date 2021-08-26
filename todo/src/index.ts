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

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List ` +
      `(${collection.getItemCounts().incomplete} items to do)`
  );
  collection.getTodoItems(true).forEach((item) => item.printDetails());
}
enum Commands {
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
    })
    .then((answers) => {
      if (answers["command"] !== Commands.Quit) {
        promptUser();
      }
    });
}

/*promptUser();

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
