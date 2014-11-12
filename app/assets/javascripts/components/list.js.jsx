/** @jsx React.DOM */

// How can this and the Board be consolidated?

var List = React.createClass({
  handleRemoveClick: function() {
    this.props.onListRemove({id: this.props.id});
    return;
  },

  render: function() {
    return (
      <li className="list">
        <span className='remove' onClick={this.handleRemoveClick}></span>
        <h2>{this.props.children}</h2>
      </li>
    );
  }
});