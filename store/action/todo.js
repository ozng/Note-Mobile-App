export const ADD_TO_DO = "ADD_TO_DO";
export const DELETE_TO_DO = "DELETE_TO_DO";
export const SET_TODOS = "SET_TODOS";
export const UPDATE_TO_DO = "UPDATE_TO_DO";

import { insertTodos, fetchTodos, deleteTodo, updateTodo } from "../../helpers/db";


export const addToDo = (title, content) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const todays = `${day}/${month}/${year} ${hour}:${minute}`;
    return async dispatch => {
        try {
            const dbResult = await insertTodos(
                title,
                content,
                todays,
                0
            );
            dispatch({ type: ADD_TO_DO, payload: { id: dbResult.insertId, title: title, content: content, date: todays } })
        } catch (err) {
            console.log(err)
        }
    };
};

export const deleteToDo = todoId => {
    return async dispatch => {
        try {
            await deleteTodo(todoId)
            dispatch({ type: DELETE_TO_DO, payload: todoId })
        }
        catch (err) {
            console.log(err)
        }
    }
};

export const updateToDo = (todoId, title, content, isDone) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const todays = `${day}/${month}/${year} ${hour}:${minute}`;
    return async dispatch => {
        try {
            await updateTodo(todoId, title, content, todays, isDone)
            dispatch({
                type: UPDATE_TO_DO, payload: {
                    todoId,
                    title,
                    content,
                    date: todays,
                    isDone
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }
};

export const loadTodo = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchTodos();
            dispatch({ type: SET_TODOS, todos: dbResult.rows._array });
        } catch (err) {
            console.log(err)
        }
    };
};