var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch =require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            searchText: '',
            showCompleted: false,
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },{
                    id: uuid(),
                    text: 'Clean the yard'
                },{
                    id: uuid(),
                    text: 'Leave mail on porch'
                },{
                    id: uuid(),
                    text: 'Play video games'
                }
            ]
        }
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
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
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch = {this.handleSearch}/>
                <TodoList todos = {todos}/>
                <AddTodo onAddTodo = {this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
