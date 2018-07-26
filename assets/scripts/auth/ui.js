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
  console.table(data.ItemsUsers)
  // clear content div, in case something was already there
  $('#content').html('')

  data.books.forEach(book => {
    const bookHTML = (`
      <h4>Name: ${ItemsUsers.Item.name}</h4>
      <p>Part: ${ItemsUsers.Item.part}</p>
      <p>Price: ${ItemsUsers.Item.price}</p>
      <br>
    `)
    $('#content').append(bookHTML)
  })
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
