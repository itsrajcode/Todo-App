import { createContext, useContext } from "react";

export const Context = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo : (Todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id)=> {},
    toggleComplete: (id)=> {}
})

export const useTodo = () => {
    return useContext(Context)
}

export const Todoprovider = Context.Provider