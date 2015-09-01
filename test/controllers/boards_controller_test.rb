require 'test_helper'

class BoardsControllerTest < ActionController::TestCase

  setup do
    # TODO: replace with fixtures
    @board = Board.create(attributes_for(:board))
  end

  test 'should get index' do
    get :index
    assert_response :success
    assert_template :index
    assert_not_nil assigns(:boards)
  end

  test 'should post create via json' do
    assert_difference 'Board.count' do
      post :create, board: attributes_for(:board), format: :json
    end
    assert_response :success
    assert_not_nil assigns(:board)
  end

  test 'should not post create via json when unsuccessful' do
    Board.stub_any_instance :save, false do
      assert_no_difference 'Board.count' do
        post :create, board: attributes_for(:board), format: :json
      end
      assert_response :success
      assert_not_nil assigns(:board)
    end
  end

  test 'should get show' do
    get :show, id: @board
    assert_response :success
    assert_template :show
    assert_equal @board, assigns(:board)
    assert_not_nil assigns(:lists)
  end

  test 'should delete destroy via json' do
    assert_difference 'Board.count', -1 do
      delete :destroy, id: @board, format: :json
    end
    assert_response :success
    assert_not_nil assigns(:board)
  end
end
