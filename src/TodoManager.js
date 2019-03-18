import React, { Component } from 'react';
import TodoActionBar from './TodoActionBar'
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class TodoManager extends Componevnt {
  state = {
    todoItems: [],
    inputText: ""
  }

  addItem = () => {
    var todoID = Date.now();
    if (this.state.inputText) {
      let todoItems = JSON.parse(JSON.stringify(this.state.todoItems));
      todoItems.push({ todoText: this.state.inputText, id: todoID, checkedStatus: false });
      this.setState({ todoItems, inputText: '' });
    }
  }

  deleteItem = (id) => {
    var updatedTodoItems = this.state.todoItems.filter((item) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });

    this.setState({ todoItems: updatedTodoItems });
  }

  selectAllItems = () => {
    var selectDeselect = true;
    var todoItems = JSON.parse(JSON.stringify(this.state.todoItems));
    if (todoItems[0] && todoItems[0].checkedStatus === true) {
      selectDeselect = false;
    }
    todoItems.forEach((element) => {
      element.checkedStatus = selectDeselect;
    });
    this.setState({ todoItems });
  }

  deleteSelectedItem = () => {
    var todoItems = this.state.todoItems.filter((item) => {
      if (item.checkedStatus === true) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ todoItems });
  }

  handleInputTextChange = (event) => {
    this.setState({ inputText: event.target.value })
  }

  handleCheckedStatusChange = (id, checkedStatus) => {
    let todoItems = JSON.parse(JSON.stringify(this.state.todoItems));
    todoItems.forEach((element) => {
      if (id === element.id) {
        element.checkedStatus = checkedStatus;
      }
    });

    this.setState({ todoItems });
  }

  render() {
    return (
      <>
        <div>
          <TodoActionBar
            text={this.state.inputText}
            addItem={this.addItem}
            selectAll={this.selectAllItems}
            deleteItem={this.deleteSelectedItem}
            handleTextChange={this.handleInputTextChange}
          />
        </div>
        <div>
          {
            this.state.todoItems.map((element) =>
              <TodoItem
                key={element.id}
                id={element.id}
                todoText={element.todoText}
                checkedStatus={element.checkedStatus}
                delete={this.deleteItem}
                handleCheckedStatusChange={this.handleCheckedStatusChange}
              />)
          }
        </div>

      </>
    );

  }

}

// const mapStateToProps = (state) => {
//   return {

//   }

// }
export default connect()(TodoManager);
