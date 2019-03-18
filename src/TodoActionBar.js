import React from 'react';
import './TodoActionBar.css'


const TodoActionBar = (props) => {

  function addItemOnKeyPress(event) {
    if (event.which === 13) {
      props.addItem();
    }
  }

  return (
    <>
      <input
        type="text"
        className="inputBox"
        value={props.text}
        onChange={props.handleTextChange}
        onKeyPress={addItemOnKeyPress}
      />
      <button
        className="btnAdd"
        onClick={props.addItem} >
        Add
      </button>
      <button
        className="btnDel"
        onClick={props.deleteItem}>
        Delete
      </button>

      <button
        className="btnSelectAll"
        onClick={props.selectAll}>
        Select/DeselectAll
      </button>

    </>
  );

}
export default React.memo(TodoActionBar);