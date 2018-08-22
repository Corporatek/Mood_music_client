'use strict'

const config = require('../config')
const store = require('../store')
const main = require('../index')

console.log("made it to api")

const signup = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signin = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data

  })
}

const changePassword = function (data) {
  console.log('date is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signout = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllSongs = function (data) {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'GET',
  })
}

const addSong = function (data) {
  return $.ajax({
    url: config.apiUrl + '/playlists',
    method: 'POST',
  })
}

module.exports = {
    signup,
    signin,
    changePassword,
    signout,
    getAllSongs,
    addSong
}