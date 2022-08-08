import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((respons) => {
    const todo = respons.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The todo with id ${id},
    has a title of '${title}',
    and it is ${completed ? 'completed' : 'not complete'}
    `);
};
