{CompositeDisposable} = require 'atom'
Pics = require './pics'

Template = """
<div class="pic"></div>
"""

module.exports =
class BackgroundPicElement extends HTMLElement

  createdCallback: ->
    @disposables = new CompositeDisposable
    @disposables.add atom.workspace.onDidAddPane => @updateVisibility()
    @disposables.add atom.workspace.onDidDestroyPane => @updateVisibility()
    @disposables.add atom.workspace.onDidChangeActivePaneItem => @updateVisibility()

    @updateVisibility()

  attachedCallback: ->
    @innerHTML = Template
    today = new Date()
    todayDate = today.getDate() - 1
    @pic = @querySelector('.pic')
    @pic.style.backgroundImage = 'url(' + Pics[ todayDate ] + ')'

  updateVisibility: ->
    if @shouldBeAttached()
      @attach()
    else
      @detach()

  shouldBeAttached: ->
    atom.workspace.getPanes().length is 1 and not atom.workspace.getActivePaneItem()?

  attach: ->
    console.log('attach!')
    paneView = atom.views.getView(atom.workspace.getActivePane())
    paneView.appendChild(this)

  detach: ->
    @remove()

module.exports = document.registerElement 'background-pic', prototype: BackgroundPicElement.prototype
