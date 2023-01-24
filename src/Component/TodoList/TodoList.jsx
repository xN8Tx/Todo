import React from "react";
import './TodoList.css'
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {

    return (
        <section className="todo-list">
            <div className="todo-list__wrapper">
                <TodoListItem />
                <TodoListItem />
            </div>
        </section>
    )
}

export default TodoList