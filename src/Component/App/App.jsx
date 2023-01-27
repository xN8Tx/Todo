import React, {useState, useEffect} from "react";
import {useFetch} from "../../Hooks/useFetch";
import './App.css'

import HeadingRow from '../HeadingRow/HeadingRow'
import TodoList from "../TodoList/TodoList";
import Popup from "../Popup/Popup";
import FetchData from '../../FetchData/fetchData';
import Loader from '../Loader/Loader';

const App = () => {
    const [data, setData] = useState([]);
    const [popup, setPopup] = useState(false);

    const [fetch, isLoading, isError] = useFetch(async () => {
        const responce = await FetchData.Get()
        setData(responce)
    })

    useEffect(() => {
        fetch();
    }, [])

    const remove = (id) => {
        FetchData.Del(id);
        setData(data.filter(f => f.id !== id));
    }

    const edit = (id, object) => {
        FetchData.Edit(id, object)
    }

    const post = (object) => {
        FetchData.Post(object)
        setData([...data, object])
    }

    return (
        <>
            <HeadingRow 
                popup={popup}
            />
            
            {isLoading 
                ?
                <Loader />
                :
                <TodoList
                    post ={post}
                    popup={popup}
                    setPopup={setPopup}
                    data={data}
                    remove={remove}
                    edit={edit}
                />
            }
            <Popup
                popup={popup}
                setPopup={setPopup}
            />
        </>
    )
}

export default App