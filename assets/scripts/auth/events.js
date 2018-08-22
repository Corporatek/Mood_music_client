'use strict'


const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

console.log("events works")

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')


  const data = getFormFields(this)
  api.signup(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

const data = getFormFields(this)
  api.signin(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out!')

const data = getFormFields(this)
  api.signout(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addToPlaylist = function (event) {
  event.preventDefault()
  console.log('Adding to Playlist...')

const data = getFormFields(this)
  console.log(data)
  console.log('Hi')
  // api.signout(data)
  //   .then(ui.signOutSuccess)
  //   .catch(ui.signOutFailure)
}

const getSongs = function (event) {
  // event.preventDefault()
  console.log('loading songs...')
  
const data = getFormFields(this)
  console.log(data)
  console.log('HI')

    api.getAllSongs(data)
      .then(ui.getSongsSuccess)
      .catch(ui.getSongsFailure)
}

const songModal = function (event) {
  event.preventDefault()
  console.log('loading songs...')

  api.addSong(data)
      .then(ui.addSongSuccess)
      .catch(ui.addSongFailure)
  
}

const addHandlers = () => {
    $('#sign-up').on('submit', onSignUp)
    $('#sign-in').on('submit', onSignIn)
    $('#sign-out').on('submit', onSignOut)
    $('#change-password').on('submit', onChangePassword)
    //playlist events below
    $(document).ready(getSongs)
    $('.pl-btn').on('click', songModal)
}

module.exports = {
    addHandlers
  
  }

