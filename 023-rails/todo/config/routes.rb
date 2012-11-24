Todo::Application.routes.draw do

  resources :notes
  resources :tasks
  match 'completed' => 'tasks#complete'
  root :to => 'tasks#index'

end
