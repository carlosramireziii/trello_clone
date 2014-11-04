class BoardsController < ApplicationController
  respond_to :html, only: [:index]
  respond_to :json

  before_action :set_board, only: [:destroy]

  def index
    respond_with @boards = Board.all
  end

  def create
    respond_with @board = Board.create(board_params)
  end

  def destroy
    respond_with @board.destroy
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end

  def set_board
    @board = Board.find(params[:id])
  end
end
