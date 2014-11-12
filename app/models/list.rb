class List < CachePersistence::Base
  attr_accessor :board_id
  attr_accessor :title

  def board
    @board ||= Board.find(board_id)
  end
end