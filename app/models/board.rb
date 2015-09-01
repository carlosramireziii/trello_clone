class Board < CachePersistence::Base
  include ActiveModel::SerializerSupport
  
  attr_accessor :title

  def lists
    List.where(board_id: id)
  end
end