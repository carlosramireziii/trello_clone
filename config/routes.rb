Rails.application.routes.draw do
  resources :boards, only: [:index, :create]
end
