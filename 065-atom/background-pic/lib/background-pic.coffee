module.exports =
  activate: ->
    BackgroundPicView = require './background-pic-view'
    @backgroundPicView = new BackgroundPicView()

  deactivate: ->
    @backgroundPicView.destroy()
