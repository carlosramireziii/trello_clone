class Board < CachePersistence::Base
  include ActiveModel::Model
  
  attr_accessor :title
end