import React, { Component } from "react";
import { AppConsumer } from "./app-context";
import { Grid, Button, Input } from "semantic-ui-react";

const TodoInput = props => {
  let todo;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <Input
        type="text"
        id="todoInput"
        onChange={e => {
          todo = e.target.value;
        }}
        placeholder="type todo here"
      />
      <Button
        type="submit"
        onClick={() => {
          if (todo) {
            props.add(todo);
            const inputEl = document.getElementById("todoInput");
            inputEl.value = "";
          }
        }}
      >
        Add Todo
      </Button>
    </form>
  );
};

const DisplayTodos = props => {
  const notCompleted = props.todos.filter(todo => {
    if (todo.completed === false) {
      return todo;
    }
  });

  return (
    <div>
      <p>All your todos: {notCompleted.length}</p>
      <ol>
        {props.todos.length > 0
          ? props.todos.map(todo => (
              <li
                className={todo.completed ? "completed todo" : "todo"}
                key={todo.id}
                onClick={() => props.completed(todo.id)}
              >
                {todo.todo}
                {"  "}
                <span className={todo.completed ? "date" : "date"}>
                  {new Date(todo.createdAt).toString()}
                </span>
              </li>
            ))
          : ""}
      </ol>
    </div>
  );
};

class TodoApp extends Component {
  render() {
    return (
      <AppConsumer>
        {({ addTodo, todos, completed }) => (
          <div className="todos">
            <Grid columns={1} className="ui center aligned">
              <Grid.Row>
                <Grid.Column className="todo-body" width={12}>
                  <h2>Simple Todo</h2>
                  <TodoInput add={addTodo} />
                  <div id="display-todos">
                    <DisplayTodos todos={todos} completed={completed} />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default TodoApp;
