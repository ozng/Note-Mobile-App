import Todo from '../../models/Todos';
import { ADD_TO_DO, DELETE_TO_DO, SET_TODOS, UPDATE_TO_DO } from '../action/todo';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            const newTODO = new Todo(
                action.payload.id.toString(),
                action.payload.title,
                action.payload.content,
                action.payload.date,
                0
            );
            return {
                ...state,
                todos: state.todos.concat(newTODO)
            }
        case DELETE_TO_DO:
            const id = action.payload
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== id)
            }
        case UPDATE_TO_DO:
            const todosIndex = state.todos.findIndex(
                todo => todo.id === action.payload
            );
            const updatedTodo = new Todo(
                action.payload.todoId,
                action.payload.title,
                action.payload.content,
                action.payload.date,
                0
            )
            const updatedTodos = [...state.todos];
            updatedTodos[todosIndex] = updatedTodo;
            return {
                ...state,
                todos: updatedTodos
            }
        case SET_TODOS:
            return {
                todos: action.todos.map(
                    td => new Todo(
                        td.id,
                        td.title,
                        td.content,
                        td.date,
                        td.isDone
                    )
                )
            }
    }
    return state;
};