'use strict'

const store = require('../store.js')
const api = require('./api')



const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully').fadeOut(1500)
  $('#message').css('background-color', 'green').fadeOut(1500)
  $('#sign-up').css('display', 'none')
  console.log('signUpSuccess ran. Data is :', data)
  
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully').fadeOut(1500)
  $('#message').css('background-color', 'green').fadeOut(1500)
  $('#sign-up').css('display', 'none')
  $('#sign-in').css('display', 'none')
  $('#sign-up-client').css('display', 'none')
  $('.nav#change-pwd').css('display', 'block')
  $('.nav#sign-out-box').css('display', 'block')  

  let userID = $('.user_barb_id')
  userID.val(data.user.id)
    


  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
//   var x = document.getElementById("game");
//   var y = document.getElementById("sign-in");
//   y.style.display = "none"
//   x.style.display =  "block"
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned! ')
  $('#change-password').css('display', 'none')
  alert("Password successfully changed!")

}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran.')
  $('#sign-out').css('display', 'none')
  $('#user-type').css('display', 'block')
  $('#view-appt').css('display', 'none')
  $('#user-db').css('display', 'none')
  $('#create-barber').css('display', 'none')
  $('#barber-db').css('display', 'none')
  $('#client-view').css('display', 'none')
  $('#barber-info').css('display', 'none')
  $('#barber-db').css('display', 'none')
  $('#client-edit-appt').css('display', 'none')
  $('.nav#change-pwd').css('display', 'none')
  $('.nav#sign-out-box').css('display', 'none')
  $('#create-barber').css('display', 'none')
  $('#view-appt').css('display', 'none')





  // make all inputs clear with the following jquery funcion:



  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error while signing out')
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Error is :', error)
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure
}