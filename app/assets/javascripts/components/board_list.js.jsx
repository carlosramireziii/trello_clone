/** @jsx React.DOM */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var BoardList = React.createClass({
  handleBoardRemove: function(board) {
    this.props.onBoardRemove(board);
    return;
  },

  render: function() {
    var handler = this.handleBoardRemove;
    var boardNodes = this.props.data.map(function(board, index) {
      return (
        <Board id={board.id} key={index} onBoardRemove={handler}>
          {board.title}
        </Board>
      );
    });
    return (
      <ul className="boardList">
        {boardNodes}
      </ul>
    );
  }
});