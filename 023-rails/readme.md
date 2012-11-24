#Build Podcast Ep 23 - Rails
[Screencast link](http://build-podcast.com/rails/)

[Ruby on Rails](http://rubyonrails.org/) is an open source web application development framework that allows us to rapidly build web apps. In this episode, we will create a very simple todo application and go through some concepts such as query, db migration, associations, routes, views and more!

#Background on Rails:

1. [Rails](http://rubyonrails.org/) website and ruby website
2. [Guide](http://guides.rubyonrails.org/)
3. What is [Model-View-Controller (MVC)](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) and other examples with [todoMVC](http://addyosmani.github.com/todomvc/)
4. What is [CRUD (Create Read Update Destroy)](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete)

#Things to learn with Rails

###1. background on rails

In the client computer, in the command line:

1. check [ruby](http://www.ruby-lang.org/en/) version `ruby -V`
2. check [rubygems](http://docs.rubygems.org/) is installed `gem -v`
3. download rails `gem install rails`
4. check the rails version `rails -v`

###2. create a new rails app

1. create a new todo application: `rails new todo`, `cd todo`
2. start the local server `rails server`
3. open in browser [http://0.0.0.0:3000/](http://0.0.0.0:3000/)

###3. create a simple task MVC

1. `rails generate scaffold Task done:boolean description:text tag:string`
2. `rake db:migrate` to generate database
3. open [http://0.0.0.0:3000/tasks](http://0.0.0.0:3000/tasks)

###4. routing url
1. route to the root by adding `root :to => 'tasks#index'` to `config/routes.rb` and delete the file `public/index.html`

###5. editing views
2. edit in file `app/views/tasks/index.html.erb` the line `<td><%= task.done %></td>` to include relative timing:

    ```
    <td><%= task.done %>, <%= distance_of_time_in_words(Time.now, task.updated_at) %> ago</td>
    ``` 

###6. editing css
6. edit file `app/assets/stylesheets/task.css.sass` to include slight styles:

    ```
    table
    	border-collapse: collapse
    
    td
    	border: 1px solid gray
    	padding: 10px
	```

###7. query interface

1. add a new method to file `app/controllers/tasks_controller.rb`
    
    ```
    def complete
        @tasks = Task.where(:done => true)

        respond_to do |format|
            format.html # index.html.erb
        end
    end
    ```
2. add `match 'completed' => 'tasks#complete'` to file `config/routes.rb`
3. add `<%= link_to 'Completed Tasks', '/completed' %>` to file `app/views/tasks/index.html.erb`
4. create the template/view file `complete.html.erb` in `app/views/tasks/`:

    ```
    <h1>Listing Completed tasks</h1>

    <table>
      <tr>
        <th>Done</th>
        <th>Description</th>
        <th>Tag</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    
    <% @tasks.each do |task| %>
      <tr>
        <td><%= task.done %>, <%= distance_of_time_in_words(Time.now, task.updated_at) %> ago</td>
        <td><%= task.description %></td>
        <td><%= task.tag %></td>
        <td><%= link_to 'Show', task %></td>
        <td><%= link_to 'Edit', edit_task_path(task) %></td>
        <td><%= link_to 'Destroy', task, method: :delete, data: { confirm: 'Are you sure?' } %></td>
      </tr>
    <% end %>
    </table>
    
    <br>
    <%= link_to 'All Tasks', root_url %>
    ```
    
###8. validation

1. add in many different [validations]()
2. check the presence of a task description and category in file `app/model/stask.rb`

    ```
    validates :description, :tag, :presence => true
    ```
    
###9. associations

1. Each task will have a series of associated notes
2. in the command line, `rails generate scaffold Note description:text`
4. create a column in the notes table: 
    
    ```
    rails generate migration add_task_id_to_notes task_id:integer
    ```
6. create the relationship
    - in file `app/model/task.rb`: `has_many :notes`
    - in file `app/model/note.rb`: `belongs_to :task` and amend line to `  attr_accessible :description, :task_id`
7. `rake db:rollback`
8. in file `db/migrate/XXXXX20121123102725_add_task_id_to_notes.rb` amend the line to add: 

    ```
    add_column :notes, :task_id, :integer, :default => 1
    ```
9. create 2 notes with descriptions
10. `rake db:rollback` and `rake db:migrate`
11. open the rails console `rails c`
12. check that all notes created belong to task 1 `Note.pluck :task_id`
13. edit the notes form to include task_id:

    ```
    <div class="field">
        <%= f.label :task_id %><br />
        <%= f.text_field :task_id %>
    </div>
    ```
13. add in the code to show related notes for each task in file `app/view/tasks/show.html/erb`

    ```
    <h3>Notes</h3>
    <ul>
    	<% @task.notes.each do |note| %>
    	<li><%= link_to note.description, note %></li>
    	<% end %>
    </ul>
    ```

#More Resources on Rails

1. [Rails tutorial](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book)
2. [Rails Cast](http://railscasts.com/)
3. [Peepcode screencast](https://peepcode.com/screencasts/ruby-on-rails)
4. For other platforms, try [cakephp](http://cakephp.org/) built on php, [django](https://www.djangoproject.com/) built on python.

#Related Build Podcast episodes

- [Terminal, Command Line](http://build-podcast.com/terminal/) 
- [Package Managers](http://build-podcast.com/package-managers/)

#Build Link of this Episode

[Treehouse Show](http://teamtreehouse.com/library/the-treehouse-show) is a weekly short, fun series on all things web development and design hosted by [Nick Pettit](http://twitter.com/nickrp) and [Jason Seifer](http://twitter.com/jseifer).