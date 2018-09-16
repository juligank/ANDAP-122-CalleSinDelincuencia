Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :localities
      root :to => "localities#index"
    end
  end
end
