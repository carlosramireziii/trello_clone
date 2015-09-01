/** @jsx React.DOM */

var ListBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadListsFromServer();
  },

  loadListsFromServer: function() {
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
  handleListSubmit: function(list) {
    var lists = this.state.data;
    lists.push(list);
    this.setState({data: lists}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: {'list': list},
        success: function(data) {
          this.loadListsFromServer();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  handleListRemove: function(list) {
    var lists = this.state.data;

    // Seems like really bad code..
    for (i = 0; i <= lists.length; i++) {
      if (lists[i].id == list.id) {
        lists.splice(i, 1);
        break;
      }
    }

    this.setState({data: lists}, function() {
      var url = '/lists/' + list.id;

      $.ajax({
        url: url,
        dataType: 'json',
        type: 'DELETE',
        data: {'list': list},
        success: function(data) {
          this.loadListsFromServer();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  
  render: function() {
    return (
      <div className="listBox">
        <ListList data={this.state.data} onListRemove={this.handleListRemove} />
        <NewList onListSubmit={this.handleListSubmit}>Create new list...</NewList>
      </div>
    );
  }
});