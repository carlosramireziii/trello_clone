class Board < CachePersistence::Base
  include ActiveModel::SerializerSupport
  
  attr_accessor :title
end