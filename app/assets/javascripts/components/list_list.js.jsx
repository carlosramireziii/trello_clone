/** @jsx React.DOM */

// How can this and the BoardList be consolidated?

var ListList = React.createClass({
  handleListRemove: function(list) {
    this.props.onListRemove(list);
    return;
  },

  render: function() {
    var handler = this.handleListRemove;
    var listNodes = this.props.data.map(function(list, index) {
      return (
        <List id={list.id} key={index} onListRemove={handler}>
          {list.title}
        </List>
      );
    });
    return (
      <ul className="listList">
        {listNodes}
      </ul>
    );
  }
});