/** @jsx React.DOM */

var Splash = React.createClass({
  render: function() {
    var classes = React.addons.classSet({
      'splash': true,
      'hidden': !this.props.show
    });
    
    return (
      <div className={classes}>{this.props.children}</div>
    );
  }
});