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

// APPEND ALL SONGS TO SONGS TABLE
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

// APPEND ALL SONGS THAT BELONG TO PLAYLIST WITH ID "1"
const playlist1Songs = function (event) {
  // event.preventDefault()
  console.log('loading songs...')

    api.pl1Songs()
      .then(ui.paydaySuccess)
      .catch(ui.paydayFailure)
}

// APPEND ALL SONGS THAT BELONG TO PLAYLIST WITH ID "2"
const playlist2Songs = function (event) {
  // event.preventDefault()
  console.log('loading songs...')

    api.pl2Songs()
      .then(ui.vibesSuccess)
      .catch(ui.vibesFailure)
}

// APPEND ALL SONGS THAT BELONG TO PLAYLIST WITH ID "3"

const playlist3Songs = function (event) {
  // event.preventDefault()
  console.log('loading songs...')

    api.pl3Songs()
      .then(ui.feelsSuccess)
      .catch(ui.feelsFailure)
}

// APPEND ALL SONGS THAT BELONG TO PLAYLIST WITH ID "4"

const playlist4Songs = function (event) {
  // event.preventDefault()
  console.log('loading songs...')

    api.pl4Songs()
      .then(ui.danceSuccess)
      .catch(ui.danceFailure)
}

// APPEND ALL SONGS THAT BELONG TO PLAYLIST WITH ID "5"

const playlist5Songs = function (event) {
  // event.preventDefault()
  console.log('loading songs...')

    api.pl5Songs()
      .then(ui.motivateSuccess)
      .catch(ui.motivateFailure)
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

    // change the below to onclick functions so that users will be able to see updated
    // tables when they attempt to show a playlist
    $(document).ready(playlist1Songs)
    $(document).ready(playlist2Songs)
    $(document).ready(playlist3Songs)
    $(document).ready(playlist4Songs)
    $(document).ready(playlist5Songs)





    $('.pl-btn').on('click', songModal)
}

module.exports = {
    addHandlers
  
  }

