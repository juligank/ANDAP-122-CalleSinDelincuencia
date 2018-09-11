Rails.application.routes.draw do
  resources :localities
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "localities#index"
end
