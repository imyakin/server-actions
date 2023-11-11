import { getClient } from "./client";
import { Form } from "./component/Form/Form";
import styles from "./page.module.css";

async function getTodos() {
  const client = await getClient();
  return client.task.findMany({});
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className={styles.main}>
      <Form />
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
}
