Rails.application.routes.draw do
  resources :college_searches, only: [:index, :create]
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :colleges
    end
  end
  root to: 'college_searches#index'
end
