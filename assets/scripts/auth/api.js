'use strict'

const config = require('../config')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  console.log(data)
  debugger
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const CreateItemsUsers = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/ItemsUsers' ,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  CreateItemsUsers
}
