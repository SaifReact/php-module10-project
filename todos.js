// Step 1: Create an array of todo items
const todos = [
  { title: "Do homework", done: false },
  { title: "Clean the room", done: true },
  { title: "Buy groceries", done: false },
  { title: "Pay bills", done: true },
  { title: "Call mom", done: false }
];

// Step 2: Filter the todos into two arrays
const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

// Step 3: Display the tasks
console.log("Done:");
completedTasks.forEach(task => console.log("- " + task.title));

console.log("\nOngoing:");
ongoingTasks.forEach(task => console.log("- " + task.title));
