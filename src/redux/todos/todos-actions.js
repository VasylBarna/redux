import shortid from "shortid";
import types from "./todos-types";

const addTodo = (text) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = (todoId) => ({
  type: types.DELETE,
  payload: todoId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addTodo, deleteTodo, changeFilter };
