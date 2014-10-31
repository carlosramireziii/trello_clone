class BoardsController < ApplicationController
  respond_to :html, only: [:index]
  respond_to :json, only: [:create]

  def index
    respond_with @boards = Board.all
  end

  def create
    respond_with @board = Board.create(board_params)
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end
