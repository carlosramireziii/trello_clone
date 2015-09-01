TU = React.addons.TestUtils

test 'renders component', (assert) -> 
  form = TU.renderIntoDocument new BoardForm()
  assert.ok TU.findRenderedComponentWithType(form, BoardForm), 'expected to render a BoardForm'

test 'clears form after submit', (assert) -> 
  mock_handler = ->
    return

  form = TU.renderIntoDocument new BoardForm(onBoardSubmit: mock_handler)
  form_tag = TU.findRenderedDOMComponentWithTag form, 'form'
  input = form.refs.title
  input.getDOMNode().value = 'New title'
  TU.Simulate.submit form_tag
  assert.equal input.getDOMNode().value, '', 'expected title input field to be cleared after form submit'

test 'does not submit todo with no title', (assert) -> 
  mock_handler = ->
    throw 'should not be called'

  form = TU.renderIntoDocument new BoardForm(onBoardSubmit: mock_handler)
  form_tag = TU.findRenderedDOMComponentWithTag form, 'form'
  TU.Simulate.submit form_tag
  expect 0 # if no exception is thrown, then we are good