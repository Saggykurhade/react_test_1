import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState ([]);

    function addTodo() {
        setTodos([...todos, "New Todo"])
    }

    const lengthyCalculation = useMemo(() =>  calculate(counter), [counter]);
  return (
    <div>
        <h1>lengthy Calculation - {lengthyCalculation}</h1>
        <h1>counter - {counter}</h1>
        <button onClick={() => setCounter((value) => value + 1)}>+</button>
        <button onClick={() => setCounter((value) => value - 1)}>-</button>
        <button onClick={addTodo}>Add Todo</button>
        {todos.map((todo) => (
            <div>{todo}</div>
        ))}
    </div>
  )
}

const calculate = (counter) => {
    for (let i = 0; i < 1000000000; i++){
        counter += 1
    }
    return counter;
}

export default UseMemo;