import React, {useState} from 'react';

import todos from '../todos.json';

const AddTodo = ({handleAddTodo, editId, setEditId, flagEdit, setFlagEdit}) => {

    const [newTodo, setNewTodo] = useState('');

    if(editId)
        setFlagEdit(1);
    
    const handleOnChange = (e) => {
        setNewTodo(e.target.value.trim());
    }

    const handleAdd = () => {
        if(newTodo === '')
            alert('Please enter a valid text');
        else {
            const now = new Date();
            const newTodoObj = {
                id: todos.length+1,
                content: newTodo,
                created_at: String(now)
            }
            todos.push(newTodoObj);
        }
    }
    
    const handleEdit = (e) => {
        const now = new Date();
        let index = todos.findIndex(todo => todo.id === editId);
        if(e.target.previousElementSibling.value.trim() === '')
            alert('Please enter a valid text');
        else {
            todos[index].content = e.target.previousElementSibling.value.trim();
            todos[index].created_at = String(now);
        }
    }

    return (
        <div className="popUpBox">
            <div className="box">
                <span className="close" onClick={handleAddTodo}>x</span>
                <input className="input" type="text" placeholder="Enter your Todo" required onChange={handleOnChange}></input>
                {!flagEdit && <button className="add" type="button" onClick={handleAdd} >Add</button>}
                {editId && <button className="editBtn" type="button" onClick={handleEdit} >Edit</button>}
            </div>         
        </div>
    )
}

export default AddTodo
