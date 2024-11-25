import { IoMdCheckboxOutline } from "react-icons/io"
import { MdDeleteForever } from "react-icons/md"

export const TodoList = ({currTask,index,onHandleDeleteTodo,onCheckTodo}) => {
    return <li key={index} className="flex flex-row justify-between gap-4 w-[280px] bg-white py-2 px-4 rounded-md">
        <span className={`text-lg font-medium ${currTask.checked?'line-through':'no-underline'}`}>{currTask.content}</span>
        <div className="flex gap-4">
            <button>
                <IoMdCheckboxOutline className="w-8 h-8 text-green-400 bg-gray-500 rounded-full p-1"onClick={()=>onCheckTodo(currTask.id)} />
            </button>
            <button>
                <MdDeleteForever className="w-8 h-8 text-red-600 bg-gray-500 rounded-full p-1" onClick={() => onHandleDeleteTodo(index)} />
            </button>
        </div>
    </li>
}