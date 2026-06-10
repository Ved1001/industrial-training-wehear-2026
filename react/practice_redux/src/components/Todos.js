import React from 'react'
import { useSelector , useDispatch} from 'react-redux' 
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <div>Todos</div>

            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}

                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >
                        Delete
                    </button>

                    <button type="submit"
                        onClick={()=> {
                            const newtext = prompt(
                                "enter updated todo",
                                todo.text
                            );

                            if(newtext) {
                                dispatch(
                                    updateTodo({
                                         id: todo.id,
                                         text: newtext
                                    })
                                );
                            }
                        }}
                    > Edit </button>
                </li>
            ))}
        </>
    )
}

export default Todos