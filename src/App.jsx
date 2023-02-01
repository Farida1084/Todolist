import { useState } from "react";
import Button from "./Button";

let count = 1;

function App() {
  const [list, setList] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  function handleChange(e) {
    setTodoTitle(e.target.value);
  }

  function handleAdd(e) {
    const todo = {
      title: todoTitle,
      done: false,
      id: count++,
    };

    const newList = [...list];
    newList.push(todo);
    setList(newList);
  }

  function handleDone(id, done) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const todo = newList[i];

      if (todo.id == id) {
        todo.done = !done;
      }
    }
    setList(newList);
  }

  function handleDelete(id) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const todo = newList[i];

      if (todo.id == id) {
        newList.splice(i, 1);
        break;
      }
    }

    setList(newList);
  }

  return (
    <div className="p-8">
      <div className="flex gap-2">
        <input
          className="border-2 border-gray-500"
          type="text"
          onChange={handleChange}
        />
        <Button
          title="Add todo"
          onClick={handleAdd}
          color="primary"
          size="small"
        />
      </div>
      <pre>{JSON.stringify(list)}</pre>

      {list.map((todo) => {
        return (
          <div className={"py-2 flex gap-2 items-center"}>
            <div className={`${todo.done ? "line-through" : ""}`}>
              {todo.title} {todo.id}
            </div>
            <Button
              title={todo.done ? "Undo" : "Done"}
              onClick={() => handleDone(todo.id, todo.done)}
              color="gray"
              size="small"
            />
            <Button
              title={"Delete"}
              onClick={() => handleDelete(todo.id)}
              color="delete"
              size="small"
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
