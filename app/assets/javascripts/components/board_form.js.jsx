/** @jsx React.DOM */

var BoardForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value.trim();
    if (!title) {
      return;
    }
    this.props.onBoardSubmit({title: title});
    this.refs.title.getDOMNode().value = '';
    return;
  },
  handleClick: function() {
    this.props.onClose();
    return;
  },
  render: function() {
    var classes = React.addons.classSet({
      'boardForm': true,
      'hidden': !this.props.show
    });

    return (
      <div className={classes}>
        <div className='header'>
          <button type="button" className="close" onClick={this.handleClick}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h5>Create Board</h5>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='title'>Title</label>
            <input type="text" placeholder="Board title" ref="title" />
          </div>
          <input type="submit" value="Create Board" />
        </form>
      </div>
    );
  }
});