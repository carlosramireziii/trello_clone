TU = React.addons.TestUtils

test 'renders component', (assert) -> 
  splash = TU.renderIntoDocument new Splash()
  assert.ok TU.findRenderedComponentWithType(splash, Splash), 'expected to render a Splash'

test 'displays title', (assert) -> 
  title = 'test title'
  splash = TU.renderIntoDocument new Splash(children: title)
  div = TU.findRenderedDOMComponentWithTag splash, 'div'
  assert.equal div.props.children, title, 'expected Splash to render title'