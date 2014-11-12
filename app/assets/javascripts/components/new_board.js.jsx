/** @jsx React.DOM */

var NewBoard = React.createClass({
  mixins: [FlipboardMixin],
  
  handleClose: function() {
    if (this.isBackShown()) {
      this.flip();
    }
    return;
  },
  handleClick: function() {
    if (this.isFrontShown()) {
      this.flip();
    }
    return;
  },
  handleBoardSubmit: function(board) {
    this.handleClose();
    this.props.onBoardSubmit(board);
    return;
  },

  render: function() {
    var classes = React.addons.classSet({
      'newBoard' : true,
      'splashMode': this.isFrontShown()
    });
    
    return (
      <div className={classes} onClick={this.handleClick}>
        <Splash show={this.isFrontShown()}>{this.props.children}</Splash>
        <BoardForm show={this.isBackShown()} onClose={this.handleClose} onBoardSubmit={this.handleBoardSubmit}></BoardForm>
      </div>
    );
  }
});