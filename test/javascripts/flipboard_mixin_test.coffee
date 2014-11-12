TU = React.addons.TestUtils

FlipboardHelper = React.createClass
  mixins: [FlipboardMixin]
  render: ->
    return React.DOM.p 'Hello world!' 

test 'shows front initially', (assert) ->
  flipboard = TU.renderIntoDocument new FlipboardHelper()
  assert.ok flipboard.isFrontShown()
  assert.ok !flipboard.isBackShown()

test 'flips board', (assert) ->
  flipboard = TU.renderIntoDocument new FlipboardHelper()
  flipboard.flip()
  assert.ok flipboard.isBackShown()
  flipboard.flip()
  assert.ok flipboard.isFrontShown()