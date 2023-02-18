Rails.application.routes.draw do
  resources :users
  resources :equipment
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

  # root "articles#index"
  get "/categories", to:"categories#index"
  get "/categories/:id", to:"categories#show"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/:id/exchanges", to: "exchanges#index_owner"
  get "/exchanges", to: "exchanges#index"
  get "/exchanges/:id", to: "exchanges#show" 
  delete "/exchange/:id", to: "exchanges#destroy"
  post "/exchange/new", to: "exchanges#create"
  post "exchange/app/:id", to: "exchanges#owner_approve"
  post "exchange/start/:id", to: "exchanges#start_exc"
  post "exchange/end/:id", to: "exchanges#end_exc"
  post 'password/forgot', to: 'passwords#forgot'
  post 'password/reset', to: 'passwords#reset'
end
# need cloudinary gem
#maybe need http gem

# maybe need CORS 