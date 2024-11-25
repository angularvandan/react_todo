import { useEffect, useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {

    const [task, setTask] = useState(getFromLocal());


    localStorage.setItem('todo-task',JSON.stringify(task));

    function getFromLocal(){
        const storedData = localStorage.getItem('todo-task');
        if(!storedData)return [];
        return JSON.parse(storedData);
    }


    function handleFormSubmit(inputValue) {

        if (!inputValue.content.trim()) return;
        if (task.includes(inputValue)) {
            return
        };
        // setTask((prev) => [...prev, {...inputValue,content:inputValue.content.trim()}]);
        let temp= [...task, {...inputValue,content:inputValue.content.trim()}];
        setTask(temp);
    }
    
    function handleDeleteTodo(index){
        let temp=task.filter((_,i)=> i!==index);
        setTask(temp);

    }
    function onCheckTodo(id){
        let temp=task.map((data,index)=>{
            if(data.id==id){
                return {...data,checked:!data.checked}
            }
            return data;
        });
        console.log(temp);
        setTask(temp);
    }
    function crearAllTodo(){
        setTask([]);
    }

    return (<section className="todo-container min-h-screen bg-gray-500">

        <header className="text-center p-4">
            <h1 className="font-semibold text-3xl text-white">Todo List</h1>
            <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} onCrearAllTodo={crearAllTodo} />
        <section className="task-list">
            <ul className="flex flex-col items-center gap-2 justify-center pt-4 ">
                {
                    task.map((currTask, index) => {
                        return <TodoList key={index} currTask={currTask} index={index} onHandleDeleteTodo={handleDeleteTodo}onCheckTodo={onCheckTodo}/>
                    })
                }
            </ul>
        </section>
    </section>);
}