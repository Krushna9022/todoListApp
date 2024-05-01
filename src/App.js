import { useState } from 'react';
import './App.css';

function App() {
    let [todolist, setTodolist] = useState([])


    let saveToDoList = (event) => {

        let toname = event.target.toname.value;
        if (!todolist.includes(toname)) {
            let finalTodolist = [...todolist, toname]
            setTodolist(finalTodolist)
        } else
            alert("todo exist alreaddy")
        event.preventDefault();

    }
    let list = todolist.map((value, index) => {
        return (<TodolistItems value={value} key={index} indexNumber={index}
            todolist={todolist}
            setTodolist={setTodolist}
        />
        )
    })
    return (
        <div className="App">
            <h1>Todo App</h1>
            <form onSubmit={saveToDoList}>
                <input type="text" name='toname' />
                <button >Add</button>
            </form>
            <div className='display'>
                <ul >
                    {list}
                </ul>
            </div>

        </div>
    );
}

export default App;


function TodolistItems({ value, indexNumber, todolist, setTodolist }) {
    let deleterow = () => {
        let finaldata = todolist.filter((v, i) => i !== indexNumber)
        setTodolist(finaldata)

    }
    return (
        <li>{indexNumber + 1} {value} <span onClick={deleterow}>&#x274C;</span></li>

    )
}
