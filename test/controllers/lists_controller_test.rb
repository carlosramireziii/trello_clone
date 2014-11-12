require 'test_helper'

class ListsControllerTest < ActionController::TestCase
  
  setup do
    @board = Board.create(attributes_for(:board))
    @list = List.create(attributes_for(:list).merge(board_id: @board.id))
  end

  test 'should get index via json' do
    get :index, board_id: @board, format: :json
    assert_response :success
    assert_equal @board, assigns(:board)
    assert_not_nil assigns(:lists)
  end

  test 'should post create via json' do
    assert_difference 'List.count' do
      post :create, board_id: @board, list: attributes_for(:list), format: :json
    end
    assert_response :success
    assert_equal @board, assigns(:board)
    assert_not_nil assigns(:list)
  end

  test 'should delete destroy via json' do
    assert_difference 'List.count', -1 do
      delete :destroy, id: @list, format: :json
    end
    assert_response :success
    assert_equal @list, assigns(:list)
  end
end
