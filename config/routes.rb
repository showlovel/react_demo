Rails.application.routes.draw do
  resources :react, only: [:index]
end
