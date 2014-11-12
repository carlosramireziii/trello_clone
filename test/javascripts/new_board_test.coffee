TU = React.addons.TestUtils

test 'renders component', (assert) -> 
  new_board = TU.renderIntoDocument new NewBoard()
  assert.ok TU.findRenderedComponentWithType(new_board, NewBoard), 'expected to render a NewBoard'

test 'renders form and splash', (assert) -> 
  new_board = TU.renderIntoDocument new NewBoard()
  assert.ok TU.findRenderedComponentWithType(new_board, BoardForm), 'expected to render a BoardForm'
  assert.ok TU.findRenderedComponentWithType(new_board, Splash), 'expected to render a Splash'

test 'shows form on click', (assert) ->
  new_board = TU.renderIntoDocument new NewBoard()
  clickable = TU.findRenderedDOMComponentWithClass new_board, 'newBoard'
  TU.Simulate.click clickable
  assert.ok new_board.isBackShown()

# Should we test the handlers directly (like below) or via simulated events (as above)
test 'handles board submit', (assert) ->
  handler = (board) -> 
    assert.ok board
  new_board = TU.renderIntoDocument new NewBoard(onBoardSubmit: handler)
  board = { title: 'Test Title' }
  new_board.handleBoardSubmit(board)
  assert.ok new_board.isFrontShown()
