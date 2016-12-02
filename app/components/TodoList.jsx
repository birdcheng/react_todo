var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');
var TodoAPI = require('TodoAPI');

var TodoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            if (filteredTodos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }

            return filteredTodos.map((todo) => {
                return (
                    <Todo key = {todo.id} {...todo}/>
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

module.exports = connect(
    (state) => {
        return state;
    }
)(TodoList);
