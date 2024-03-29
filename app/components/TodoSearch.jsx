var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var TodoSearch = React.createClass({
    render: function () {
        var {dispatch, searchText, showCompleted} = this.props;

        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={ () => {
                            var searchText = this.refs.searchText.value;
                            dispatch(actions.setSearchText(searchText));
                        }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={ () => {
                                dispatch(actions.toggleShowCompleted());
                            }}/>
                        show completed todos
                    </label>
                </div>
            </div>
        )
    }
});

//module.exports = TodoSearch;
module.exports = connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        };
    }
)(TodoSearch);
