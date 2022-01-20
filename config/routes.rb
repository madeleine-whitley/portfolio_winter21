Rails.application.routes.draw do

  namespace :api do
    resources :contacts do 
      resources :blogs
    end
  end

    resources :blogs, except: [:index, :show, :create, :update, :destroy ] do
      resources :posts 
     end

end