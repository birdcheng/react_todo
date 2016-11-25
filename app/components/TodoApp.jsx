var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var Todo = require('Todo');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            searchText: '',
            showCompleted: false,
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleSearch: function (searchText, showCompleted) {
        this.setState({
            searchText: searchText.toLowerCase(),
            showCompleted: showCompleted
        });
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch = {this.handleSearch}/>
                            <TodoList/>
                            <AddTodo onAddTodo = {this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;
