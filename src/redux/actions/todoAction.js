import { ADDTODO, DONETODO, EDITTODO, REMOVETODO } from "../types/todoTypes"

export const addTodo = newTodo => {
    return {
        type:ADDTODO,
        payload:newTodo,
    };
};
export const removeTodo = id => {
    return {
        type:REMOVETODO,
        payload:id,
    };
};
export const doneTodo = id => {
    return {
        type:DONETODO,
        payload:id,
    };
};
export const editTodo = (id,newText) => {
    return {
        type:EDITTODO,
        payload:{id,newText}
    };
};