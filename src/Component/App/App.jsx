import React from "react";
import './App.css'

import HeadingRow from '../HeadingRow/HeadingRow'
import TodoList from "../TodoList/TodoList";

const App = () => {

    return (
        <>
            <HeadingRow />
            <TodoList />
        </>
    )
}

export default App