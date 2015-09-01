class ListsController < ApplicationController
  respond_to :json

  before_action :set_board, only: [:index, :create]
  before_action :set_list, only: [:destroy]

  def index
    respond_with @lists = @board.lists
  end

  def create
    respond_with @list = List.create(list_params)
  end

  def destroy
    respond_with @list.destroy
  end

  private

  def list_params
    # TODO: don't need the board_id after AR is implemented
    params.require(:list).permit(:title).merge(board_id: @board.id)
  end

  def set_board
    @board = Board.find(params[:board_id])
  end

  def set_list
    @list = List.find(params[:id])
  end
end
