/** @jsx React.DOM */

var NewList = React.createClass({
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
  handleListSubmit: function(list) {
    this.handleClose();
    this.props.onListSubmit(list);
    return;
  },

  render: function() {
    var classes = React.addons.classSet({
      'newList' : true,
      'splashMode': this.isFrontShown()
    });
    
    return (
      <div className={classes} onClick={this.handleClick}>
        <Splash show={this.isFrontShown()}>{this.props.children}</Splash>
        <ListForm show={this.isBackShown()} onClose={this.handleClose} onListSubmit={this.handleListSubmit}></ListForm>
      </div>
    );
  }
});