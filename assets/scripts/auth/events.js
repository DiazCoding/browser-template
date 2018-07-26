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
  console.log('sign up ran!')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.fail)
  console.log('sign in ran!')
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.fail)
  console.log('sign out ran!')
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.fail)
  console.log('change password ran!')
}

const onGetItemsUsers = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getItemsUsers(data)
  .then(ui.getItemsUsersSuccess)
  .catch(ui.fail)
  console.log('this works')
}

const onDeleteItemsUsers = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroyItemsUsers(data)
    .then(booksUi.onDestroySuccess)
    .catch(booksUi.onError)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-itemsusers').on('click', onGetItemsUsers)
  $('#delete-itemsusers').on('click', onDeleteItemsUsers)
}

module.exports = {
  addHandlers
}
