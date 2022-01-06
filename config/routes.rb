Rails.application.routes.draw do

  namespace :api do
    resources :contacts do 
      resources :blogs do 
        resources :posts 
      end
    end
  end

end