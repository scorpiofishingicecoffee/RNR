Rails.application.routes.draw do
  resources :users, only: [:index, :create, :destroy]
  #custom
  post '/signup', to:"users#create"
  # delete '/logout', to:"users#destroy"
  # # ----------------
  get '/loggedin', to: "users#show"
  #----------------
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  namespace :api do
    namespace :v1 do
        resources :games, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
