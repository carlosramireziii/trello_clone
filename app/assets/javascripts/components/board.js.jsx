/** @jsx React.DOM */

var Board = React.createClass({
  handleClick: function() {
    this.props.onBoardRemove({id: this.props.id});
    return;
  },

  render: function() {
    return (
      <li className="board">
        <span className='remove' onClick={this.handleClick}></span>
        <h2>{this.props.children}</h2>
      </li>
    );
  }
});