/** @jsx React.DOM */

var ListForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value.trim();
    if (!title) {
      return;
    }
    this.props.onListSubmit({title: title});
    this.refs.title.getDOMNode().value = '';
    return;
  },
  handleClick: function() {
    this.props.onClose();
    return;
  },
  render: function() {
    var classes = React.addons.classSet({
      'listForm': true,
      'hidden': !this.props.show
    });

    return (
      <div className={classes}>
        <div className='header'>
          <button type="button" className="close" onClick={this.handleClick}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h5>Create List</h5>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='title'>Title</label>
            <input type="text" placeholder="List title" ref="title" />
          </div>
          <input type="submit" value="Create List" />
        </form>
      </div>
    );
  }
});