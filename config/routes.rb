Rails.application.routes.draw do
  resources :boards, only: [:index, :create, :show, :destroy], shallow: true do
    resources :lists, only: [:index, :create, :destroy]
  end
end
