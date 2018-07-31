'use strict'
// remove signIn and signOut
const store = require('../store.js')

// remove me before code-along
const signInSuccess = (data) => {
  store.user = data.user
  console.log(store)
}

// remove me before code-along
const signOutSuccess = () => {
  store.user = null
  console.log(store)
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}


const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const getItemsUsersSuccess = function (data) {
  console.log('this is reaching')
  console.table(data.ItemsUsers.items)
  // clear content div, in case something was already there
  $('#content').html('')

  data.ItemsUsers.forEach(items => {
    const ItemsUsersHTML = (`
      <h4>Name: ${ItemsUsers.name}</h4>
      <p>Part: ${ItemsUsers.part}</p>
      <p>Price: ${ItemsUsers.price}</p>
      <br>
    `)
    $('#content').append(ItemsUsersHTML)
  })
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  getItemsUsersSuccess
}
