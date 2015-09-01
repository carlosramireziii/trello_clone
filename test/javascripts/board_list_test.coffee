TU = React.addons.TestUtils

test 'renders component', (assert) -> 
  list = TU.renderIntoDocument new BoardList(data: [])
  assert.ok TU.findRenderedComponentWithType(list, BoardList), 'expected to render a BoardList'

test 'renders a board component for each item in collection', (assert) -> 
  boards = [
    { title: 'Board 1' },
    { title: 'Board 2' }
  ]
  list = TU.renderIntoDocument new BoardList(data: boards)
  result = TU.scryRenderedComponentsWithType list, Board
  assert.equal result.length, 2, 'expected to render 2 Boards'