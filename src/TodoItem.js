import React from 'react';
import './TodoItem.css'


const TodoItem = (props) => {

    function deleteItem() {
        props.delete(props.id);
    }

    function handleCheckedStatusChange(event) {
        props.handleCheckedStatusChange(props.id, event.target.checked);
    }

    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }

    return (
        <div id={props.id} className="list-item">
            <input
                type="checkbox"
                checked={props.checkedStatus}
                onChange={handleCheckedStatusChange}>
            </input>
            <p
                style={props.checkedStatus ? completedStyle : null}>
                {props.todoText}
            </p>
            <button
                className="btnClose"
                onClick={deleteItem}>
                X
            </button>
        </div >

    );
}
export default React.memo(TodoItem);

