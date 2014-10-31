ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

# Use some custom extensions to the MiniTest library
require 'extensions/minitest'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  def attributes_for(klass)
    # TODO: replace with fixtures when created
    case klass
    when :board
      { title: 'Test title' }
    end
  end
end
