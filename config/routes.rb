Rails.application.routes.draw do
  get 'welcome/index'

namespace :api do
  resources :cities 
end

  root 'welcome#index'



end
