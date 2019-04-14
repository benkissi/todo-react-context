import React, { Component } from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.completed = this.completed.bind(this);
  }

  addTodo(todo) {
    const { todos } = this.state;

    const newTodo = {
      id: Math.floor(Math.random() * (1000 - 1)) + 1,
      todo: todo,
      createdAt: Date.now(),
      completed: false
    };

    this.setState({
      todos: todos.concat(newTodo)
    });
    // console.log("updatedTodos", updatedTodos);
  }

  completed(id) {
    const { todos } = this.state;
    // const todo = todos.find(item => item.id === id);
    todos.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          todos: this.state.todos,
          addTodo: this.addTodo,
          completed: this.completed
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
