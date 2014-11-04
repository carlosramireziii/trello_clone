/** @jsx React.DOM */

var NewBoard = React.createClass({
  getInitialState: function() {
    return { isFormShown: false };
  },

  toggleForm: function(shouldShowForm) {
    this.setState({ isFormShown: shouldShowForm });
    return;
  },
  hideForm: function() {
    this.toggleForm(false);
    return;
  },
  showForm: function() {
    this.toggleForm(true);
    return;
  },

  isFormShown: function() {
    return this.state.isFormShown;
  },
  isSplashShown: function() {
    return !this.isFormShown();
  },

  handleClose: function() {
    if (this.isFormShown()) {
      this.hideForm();
    }
    return;
  },
  handleClick: function() {
    if (this.isSplashShown()) {
      this.showForm();
    }
    console.debug(this.isSplashShown());
    return;
  },
  handleBoardSubmit: function(board) {
    this.hideForm();
    this.props.onBoardSubmit(board);
    return;
  },

  render: function() {
    var classes = React.addons.classSet({
      'newBoard' : true,
      'splashMode': this.isSplashShown()
    });
    
    return (
      <div className={classes} onClick={this.handleClick}>
        <Splash show={this.isSplashShown()}>{this.props.children}</Splash>
        <BoardForm show={this.isFormShown()} onClose={this.handleClose} onBoardSubmit={this.handleBoardSubmit}></BoardForm>
      </div>
    );
  }
});