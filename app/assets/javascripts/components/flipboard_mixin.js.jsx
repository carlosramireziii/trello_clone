/** @jsx React.DOM */

var FlipboardMixin = {
  getInitialState: function() {
    return { isFrontShown: true };
  },
  isFrontShown: function() {
    return this.state.isFrontShown;
  },
  isBackShown: function() {
    return !this.isFrontShown();
  },
  flip: function() {
    this.setState({ isFrontShown: !this.isFrontShown() });
    return;
  }
};