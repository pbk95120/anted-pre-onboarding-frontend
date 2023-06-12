import { useEffect, useState } from "react";
import { getTodo, updateTodo, createTodo, deleteTodo } from "../api/todo";

const TodoPage = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [inputTodo, setInputTodo] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value);
  };

  const handleCheckBox = async (
    id: number,
    iscompleted: boolean,
    todo: string
  ) => {
    await updateTodo(id, iscompleted, todo);
    getTodo()
      .then((res) => {
        if (res) {
          setTodos(res.data);
        }
      })
      .catch((error) => alert(error.message));
  };

  const handleAddTodo = async (event?: React.MouseEvent<HTMLButtonElement>) => {
    await createTodo(inputTodo);
    getTodo()
      .then((res) => {
        if (res) {
          setTodos(res.data);
        }
      })
      .catch((error) => alert(error.message));
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    getTodo()
      .then((res) => {
        if (res) {
          setTodos(res.data);
        }
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    getTodo()
      .then((res) => {
        if (res) {
          setTodos(res.data);
        }
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              TodoList
            </h1>
            <div className="flex">
              <input
                data-testid="new-todo-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 mr-2 w-9/12"
                onChange={handleInput}
              />
              <button
                data-testid="new-todo-add-button"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 w-3/12"
                onClick={() => handleAddTodo()}
              >
                추가
              </button>
            </div>
            {todos.map((todo) => (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={todo.isCompleted}
                    onChange={() =>
                      handleCheckBox(todo.id, !todo.isCompleted, todo.todo)
                    }
                  />
                  <span className="inline-block mr-5 w-6/12">{todo.todo}</span>
                </label>
                <button
                  data-testid="modify-button"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                >
                  수정
                </button>
                <button
                  data-testid="delete-button"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  삭제
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TodoPage;
