import { baseURL } from "./baseURL";

export const getTodo = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const res = await baseURL.get("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const createTodo = async (todo: string) => {
  const token = localStorage.getItem("access_token");
  try {
    const res = await baseURL.post(
      "/todos",
      {
        todo: todo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id: number) => {
  const token = localStorage.getItem("access_token");
  try {
    const res = await baseURL.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (
  id: number,
  isCompleted: boolean,
  todo: string
) => {
  const token = localStorage.getItem("access_token");
  try {
    const res = await baseURL.put(
      `/todos/${id}`,
      {
        todo: todo,
        isCompleted: isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
