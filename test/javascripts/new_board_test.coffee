TU = React.addons.TestUtils

test 'renders component', (assert) -> 
  new_board = TU.renderIntoDocument new NewBoard()
  assert.ok TU.findRenderedComponentWithType(new_board, NewBoard), 'expected to render a NewBoard'

test 'renders form and splash', (assert) -> 
  new_board = TU.renderIntoDocument new NewBoard()
  assert.ok TU.findRenderedComponentWithType(new_board, BoardForm), 'expected to render a BoardForm'
  assert.ok TU.findRenderedComponentWithType(new_board, Splash), 'expected to render a Splash'

test 'hides form initially', (assert) ->
  board = TU.renderIntoDocument new NewBoard()
  assert.equal board.state.isFormShown, false

test 'toggleForm', (assert) ->
  board = TU.renderIntoDocument new NewBoard()
  board.toggleForm(true)
  assert.equal board.state.isFormShown, true

  board.toggleForm(false)
  assert.equal board.state.isFormShown, false

test 'hideForm', (assert) ->
  board = TU.renderIntoDocument new NewBoard()
  board.hideForm()
  assert.equal board.state.isFormShown, false

test 'showForm', (assert) ->
  board = TU.renderIntoDocument new NewBoard()
  board.showForm()
  assert.equal board.state.isFormShown, true

test 'isFormShown', (assert) ->
  board = TU.renderIntoDocument new NewBoard()
  assert.equal board.isFormShown(), false

  board.showForm()
  assert.equal board.isFormShown(), true

test 'isSplashShown', (assert) ->
  board = TU.renderIntoDocument new NewBoard()
  assert.equal board.isSplashShown(), true

  board.showForm()
  assert.equal board.isSplashShown(), false

# test 'shows form on click', (assert) ->
#   board = TU.renderIntoDocument new NewBoard()
#   form = TU.findRenderedDOMComponentWithTag board, 'form'
#   list_item = TU.findRenderedDOMComponentWithTag board, 'li'
#   TU.Simulate.click list_item
#   assert.ok board.isFormShown()

# NOTE: should we be deeply testing DOM components?
# test 'hides form and displays splash on click', (assert) ->
#   board = TU.renderIntoDocument new NewBoard()
#   form = TU.findRenderedDOMComponentWithTag board, 'form'
#   list_item = TU.findRenderedDOMComponentWithTag board, 'li'
#   h2 = TU.findRenderedDOMComponentWithTag board, 'h2'
#   form = TU.findRenderedComponentWithType board, BoardForm

#   board.showForm()
#   # assert.ok form.state.show