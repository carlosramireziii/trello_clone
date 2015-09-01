/** @jsx React.DOM */

var Board = React.createClass({
  handleClick: function() {
    var url = '/boards/' + this.props.id;
    window.location = url;
  },
  handleRemoveClick: function() {
    this.props.onBoardRemove({id: this.props.id});
    return;
  },

  render: function() {
    return (
      <li className="board" onClick={this.handleClick}>
        <span className='remove' onClick={this.handleRemoveClick}></span>
        <h2>{this.props.children}</h2>
      </li>
    );
  }
});