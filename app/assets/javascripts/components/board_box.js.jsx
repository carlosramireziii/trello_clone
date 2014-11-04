/** @jsx React.DOM */

var BoardBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadBoardsFromServer();
  },

  loadBoardsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleBoardSubmit: function(board) {
    var boards = this.state.data;
    boards.push(board);
    this.setState({data: boards}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: {'board': board},
        success: function(data) {
          this.loadBoardsFromServer();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  handleBoardRemove: function(board) {
    var boards = this.state.data;

    // Seems like really bad code..
    for (i = 0; i <= boards.length; i++) {
      if (boards[i].id == board.id) {
        boards.splice(i, 1);
        break;
      }
    }

    this.setState({data: boards}, function() {
      var url = this.props.url + '/' + board.id;

      $.ajax({
        url: url,
        dataType: 'json',
        type: 'DELETE',
        data: {'board': board},
        success: function(data) {
          this.loadBoardsFromServer();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  
  render: function() {
    return (
      <div className="boardBox">
        <BoardList data={this.state.data} onBoardRemove={this.handleBoardRemove} />
        <NewBoard onBoardSubmit={this.handleBoardSubmit}>Create new board...</NewBoard>
      </div>
    );
  }
});