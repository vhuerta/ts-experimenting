import axios from "axios";

const getToDoURL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(getToDoURL).then(({ data: todo }: { data: Todo }) => {
  const { id, title, completed } = todo;
  logToDo(id, title, completed);
});

function logToDo(id: number, title: string, completed: boolean): void {
  console.log(`
  id: ${id}
  title: ${title}
  completed: ${completed}
`);
}
