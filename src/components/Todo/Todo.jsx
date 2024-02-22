import React, { useRef, useState } from 'react';
import './Todo.css';

function Todo() {
    const [todos, setTodos] = useState([]);
    const newTodoRef = useRef();

    // handle adding new todo
    const handleAddTodo = (event) => {
        event.preventDefault();
        // check for empty input
        if(newTodoRef.current.value.trim() === '') return; 
        setTodos([...todos, newTodoRef.current.value]);
        // clear input
        newTodoRef.current.value = '';
    };

    // handle removing a todo
    const handleRemoveTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    return (
    <div>
        <h1>My Todo List</h1>
        <div>
            <form onSubmit={handleAddTodo}>
                <input
                type="text"
                placeholder="Add a new task"
                ref={newTodoRef}
                />
                <button type="submit">Add</button>
            </form>
            <ul className='list-container'>
                {todos.map((todo, index) => (
                    <li key={index} className='list-item'>
                        {todo}<button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default Todo;