import React, { useState,useEffect } from "react";
import './TodoListItem.css'
import { TickSvg, DoneSvg, SettingsSvg, EditSvg, DeleteSvg, CancelSvg } from '../../Svg/indexSvg';

const TodoListItem = ({name, status, id, remove, edit}) => {
    const [done, setDone] = useState(status)
    const [settings, setSettings] = useState(false)
    const [editStatus, setEditStatus] = useState(false)
    const [value, setValue] = useState(name)
    const [newValue, setNewValue] = useState(value)

    useEffect(() => {
        setNewValue(value)
    }, [settings])

    return (
        <div className={done ? 'todo-list-item done' : 'todo-list-item'}>

            <div className={settings ? 'todo-list-item__wrapper settings' : 'todo-list-item__wrapper'}>

                <div className={editStatus ? 'todo-list-item__name status' : 'todo-list-item__name'}>
                    <div className="todo-list-item__name_btn"
                        onClick={() => {
                            setDone(!done)
                            edit(id, {
                                "id": `${id}`,
                                "status":  !done,
                                "name": `${value}`
                            })
                        }}
                    >
                        <TickSvg />
                    </div>
                    {editStatus 
                        ? 
                        <input
                            className="input"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                        /> 
                        : 
                        <p>{value}</p>
                    }
                </div>

                <div className={editStatus ? 'todo-list-item__btn none' : 'todo-list-item__btn'}
                    onClick={() => setSettings(!settings)}
                >
                    <SettingsSvg />
                </div>
                <div className={editStatus ? 'todo-list-item__changer' : 'todo-list-item__changer none'}>
                    <div className="todo-list-item__changer_done"
                        onClick={()=> {
                            setEditStatus(false) 
                            setSettings(false)
                            setValue(newValue)
                            edit(id, {
                                id,
                                "status": done,
                                "name": `${newValue}`
                            })
                        }}
                    >
                        <DoneSvg />
                    </div>
                    <div className="todo-list-item__changer_cancel"
                        onClick={()=> {
                            setEditStatus(false) 
                            setSettings(false)
                        }}
                    >
                        <CancelSvg />
                    </div>
                </div>
            </div>

            <div className="todo-list-item__menu">
                <div className="todo-list-item__menu_edit"
                    onClick={() => {
                        setEditStatus(!editStatus) 
                        setSettings(false)
                    }}
                >
                    <EditSvg />
                </div>
                <div className="todo-list-item__menu_del"
                    onClick={() => {
                        remove(id)
                        setSettings(false)
                    }}
                >
                    <DeleteSvg />
                </div>
            </div>
        </div>
    )
}

export default TodoListItem