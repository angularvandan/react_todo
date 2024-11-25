import { useState } from "react";

export const TodoForm = ({onAddTodo,onCrearAllTodo}) => {

    const [inputValue, setInputValue] = useState({content:''});

    function handleInputChange(value) {
        setInputValue({id:value,content:value,checked:false});
    }
    function handleFormSubmit(event) {

        onAddTodo(inputValue);
        event.preventDefault();
        setInputValue({content:''});
    }
    function crearAllTodo(){
        onCrearAllTodo();
    }

    return <section>
        <form className="flex justify-center" onSubmit={handleFormSubmit}>
            <div>
                <input type="text" className="todo-input py-2 px-2 bg-white rounded-l-lg" autoComplete="off" value={inputValue.content} onChange={(event) => { handleInputChange(event.target.value) }} />
            </div>
            <div className="flex gap-2">
                <div className="flex items-center bg-green-500 px-2 rounded-r-lg">
                    <button className="todo-btn" type="submit">Add Task</button>
                </div>
                <div className="flex items-center bg-red-500 px-4 rounded-lg">
                    <button className="todo-clr-btn" type="button" onClick={crearAllTodo}>Clear</button>
                </div>
            </div>
        </form>
    </section>
}