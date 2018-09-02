'use strict'

const config = require('../config')
const store = require('../store')
const main = require('../index')

// console.log("made it to api")

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

const getAllSongs = function () {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'GET',
  })
}

const addSong = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/song/' + data.song.id,
    method: 'PATCH',
    data
  })
}

const pl1Songs = function () {
  return $.ajax({
    url: config.apiUrl + '/playlists/' + 1,
    method: 'GET',
  })
  
}

const pl2Songs = function () {
  return $.ajax({
    url: config.apiUrl + '/playlists/' + 2,
    method: 'GET',
  })
  
}

const pl3Songs = function () {
  return $.ajax({
    url: config.apiUrl + '/playlists/' + 3,
    method: 'GET',
  })
  
}

const pl4Songs = function () {
  return $.ajax({
    url: config.apiUrl + '/playlists/' + 4,
    method: 'GET',
  })
  
}

const pl5Songs = function () {
  return $.ajax({
    url: config.apiUrl + '/playlists/' + 5,
    method: 'GET',
  })
  
}

const deleteSong = function (data) {
  return $.ajax({
    url: config.apiUrl + '/song/' + data.song.id,
    method: 'PATCH',
    data
  }),
  alert("Song successfully deleted from playlist!")
  
}

const newSong = function (data) {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'POST',
    data
  })
}

module.exports = {
    signup,
    signin,
    changePassword,
    signout,
    getAllSongs,
    addSong,
    pl1Songs,
    pl2Songs,
    pl3Songs,
    pl4Songs,
    pl5Songs,
    deleteSong,
    newSong
}