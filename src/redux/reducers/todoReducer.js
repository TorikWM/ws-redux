import { ADDTODO, DONETODO, EDITTODO, REMOVETODO } from "../types/todoTypes";

const initialeState = {
   todos: [
       {
         id:1,
          done:false,
          text:"leran redux",  
       },
       {
        id:2,
         done:false,
         text:"leran node"  ,
      },

   ] 
}
const todoReducer = (state = initialeState,action) => {
    switch(action.type){
       case ADDTODO:
          return {
             ...state,
             todos:[...state.todos,action.payload]
          };
          case REMOVETODO:
          return {
             ...state,
             todos: state.todos.filter(todo=>todo.id !==action.payload)
          };
          case DONETODO:
          return {
             ...state,
             todos: state.todos.map(todo=>todo.id===action.payload? {...todo,done:!todo.done}:todo)
          };
          case EDITTODO:
          return {
             ...state,
             todos: state.todos.map(todo=>
               todo.id === action.payload.id ? {...todo,text:action.payload.newText}:todo)
          };

          default:
             return state;
    }
};
export default todoReducer;