import React, { useState } from 'react'

const UseMemo = () => {

    const [todos, setTodos] = useState ([]);
    const [getTodo, setGetTodo] = useState('');

    function handleChange(event) {
        setGetTodo(event.target.value)
        console.log(getTodo)
    }

    function addTodo() {
        setTodos([...todos, getTodo])
    }

  return (
    <div>
        <input type="text" name="" onChange={handleChange}/>
        <button onClick={addTodo}>Add todo</button>
        {todos.map((todo) => (
            <div>{todo}</div>
        ))}
    </div>
  )
}

export default UseMemo;