import React from "react";
import './TodoList.css'
import TodoListItem from "../TodoListItem/TodoListItem";
import Additem from '../AddItem/Additem';

const TodoList = ({popup, data, remove, edit, setPopup, post}) => {
    
    return (
        <section className="todo-list">
            <div className="todo-list__wrapper">
                {popup
                    ?
                    <Additem
                        post={post}
                        setPopup={setPopup}
                    />
                    :
                    data.map((el, i) => (
                        <TodoListItem id={el.id} key={el.id} name={el.name} status={el.status} remove={remove} edit={edit}/>
                    ))
                }
            </div>
        </section>
    )
}

export default TodoList