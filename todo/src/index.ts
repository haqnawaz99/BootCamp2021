import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes", true),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true),
  new TodoItem(4, "Write Code"),
];
let collection = new TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
//let newId: number = collection.addTodo("Go for run");
//let todoItem: TodoItem = collection.getTodoById(newId);
//todoItem.printDetails();
//collection.addTodo(todoItem);
collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
