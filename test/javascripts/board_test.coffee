TU = React.addons.TestUtils

test 'renders component', (assert) -> 
  board = TU.renderIntoDocument new Board()
  assert.ok TU.findRenderedComponentWithType(board, Board), 'expected to render a Board'

test 'displays title', (assert) -> 
  title = 'test title'
  board = TU.renderIntoDocument new Board(children: title)
  h2 = TU.findRenderedDOMComponentWithTag board, 'h2'
  assert.equal h2.props.children, title