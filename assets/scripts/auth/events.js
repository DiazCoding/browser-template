'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
  .done(ui.success)
  .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.fail)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.fail)
}

const onAddItemsUsers = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addNewItemsUsers(data)
  .done(ui.success)
  .fail(ui.fail)
}

const onGetItemsUsers = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getItemsUsers(data)
  .done((data) => {
    $.each(data.items_users, (index, element) => {
console.log(data.items_users[index])
      $('#table-projects > tbody').append('<tr><td>' + element.id + '</td><td>' + element.item.name + '</td><td>' + element.item.part + '</td><td>' + element.item.price + '</td></tr>') ;
     });
  })
  .fail(ui.fail)
}

const onDeleteItemsUsers = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  debugger
  api.destroyItemsUsers(data.items_users.id)
    .then(ui.success)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-itemsusers').on('click', onGetItemsUsers)
  $('#delete-item').on('submit', onDeleteItemsUsers)
}

module.exports = {
  addHandlers
}
