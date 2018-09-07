'use strict'
const showSongs = require('../templates/song-listing.handlebars')
const store = require('../store.js')
const api = require('./api')
const modal = require('../modal')
const playlist1 = require('../templates/playlist-song-listing.handlebars')


const addSongSuccess = function (data) {
  //console.log('Successfully add song to playlist', data)
  alert("Added Song to playlist!")
}

const addSongFailure = function (error) {
  alert('failed to add song', error)
}


const newSongSuccess = function (data) {
  $('#message').text('added song to app. refresh page').fadeOut(1500)
  $('#message').css('background-color', 'green').fadeOut(1500)
  $('form#create-song fieldset input.song-add').val("")

  //console.log('Successfully added song to app', data)
  alert("Successfully created a new song")
}

const newSongFailure = function (error) {
  alert('failed to add song', error)
}

const getSongsSuccess = function (data) {
 
  // below takes the objects and turns them into html elements
  const showSongsHtml = showSongs({songs: data.songs})
  // console.log(showSongsHtml)
// below is the html for the add to playlist button
  // const addbtn = `<td><input id="addsongbtn" type="button" value="Add to a playlist"></td>`

// below appends all songs to the songs table on the front end
  $('tbody#song-table').append(`<tr>` + showSongsHtml + `</tr>`)
  
}


const getSongsFailure = function (error) {
  $('#message').text('Error getting songs')
  $('#message').css('background-color', 'red')
  // console.log('Songs failed to load')
}

const paydaySuccess = function (data) {
 
  // console.log("it worked! ", data)
  // below takes the objects and turns them into html elements
  const showSongsHtml = playlist1({songs: data.playlist.songs})

// below appends all songs to the songs table on the front end
  $('table#payday').append(`<tr>` + showSongsHtml + `</tr>`)
  
}


const paydayFailure = function (error) {
  $('#message').text('Error getting songs')
  $('#message').css('background-color', 'red')
 //  console.log('Songs failed to load')
}

const vibesSuccess = function (data) {
 
  // console.log(data)
  // below takes the objects and turns them into html elements
  const showSongsHtml = playlist1({songs: data.playlist.songs})

// below appends all songs to the songs table on the front end
  $('table#vibes').append(`<tr>` + showSongsHtml + `</tr>`)
  
}

const vibesFailure = function (error) {
  $('#message').text('Error getting songs')
  $('#message').css('background-color', 'red')
  console.log('Songs failed to load')
}


const feelsSuccess = function (data) {
 
  // console.log(data)
  // below takes the objects and turns them into html elements
  const showSongsHtml = playlist1({songs: data.playlist.songs})

// below appends all songs to the songs table on the front end
  $('table#feels').append(`<tr>` + showSongsHtml + `</tr>`)
  
}

const feelsFailure = function (error) {
  $('#message').text('Error getting songs')
  $('#message').css('background-color', 'red')
  // console.log('Songs failed to load')
}

const danceSuccess = function (data) {
 
  // console.log(data)
  // below takes the objects and turns them into html elements
  const showSongsHtml = playlist1({songs: data.playlist.songs})
// below appends all songs to the songs table on the front end
  $('table#dance').append(`<tr>` + showSongsHtml + `</tr>`)
  
}

const danceFailure = function (error) {
  $('#message').text('Error getting songs')
  $('#message').css('background-color', 'red')
  // console.log('Songs failed to load')
}

const motivateSuccess = function (data) {
 
 //  console.log(data)
  // below takes the objects and turns them into html elements
  const showSongsHtml = playlist1({songs: data.playlist.songs})

// below appends all songs to the songs table on the front end
  $('table#motivate').append(`<tr>` + showSongsHtml + `</tr>`)

  
}

const motivateFailure = function (error) {
  $('#message').text('Error getting songs')
  $('#message').css('background-color', 'red')
  // console.log('Songs failed to load')
}

// Delete song
const deleteSongSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  // alert('song successfully deleted from playlist!')
  $('#change-password').css('display', 'none')
  alert("song deleted!")

    $(document).ready(playlist1Songs)
    $(document).ready(playlist2Songs)
    $(document).ready(playlist3Songs)
    $(document).ready(playlist4Songs)
    $(document).ready(playlist5Songs)

}

const deleteSongFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
 // console.log('changePasswordFailure ran. Error is :', error)
}


// Login UI below

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully').fadeOut(1500)
  $('#message').css('background-color', 'green').fadeOut(1500)
  $('#sign-up').css('display', 'none')
  // console.log('signUpSuccess ran. Data is :', data)
  $('input#e').val("")
  $('input#pw').val("")
  $('input#pwc').val("")
  alert('Successfully signed up!')


  
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
  $('input#email').val("")
  $('input#password').val("")
  $('div#app').css('display', 'block')
  $('#create-song').css('display', 'block')

  let userID = $('.user_barb_id')
  userID.val(data.user.id)
    
  //console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
//   var y = document.getElementById("sign-in");
//   y.style.display = "none"
//   x.style.display =  "block"
alert("Welcome " + data.user.email + "!")
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  // console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  // console.log('changePasswordSuccess ran and nothing was returned! ')
  $('#change-password').css('display', 'none')
  alert("Password successfully changed!")
  $('#app').css('display', 'block')

}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  // console.log('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  // console.log('signOutSuccess ran.')
  $('#sign-out').css('display', 'none')
  $("div#app").css('display', "none")
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  alert('Logged out')

  // make all inputs clear with the following jquery funcion:

  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error while signing out')
  $('#message').css('background-color', 'red')
  // console.log('signOutFailure ran. Error is :', error)
}



module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure,
    getSongsSuccess,
    getSongsFailure,
    addSongFailure,
    addSongSuccess,
    paydaySuccess,
    paydayFailure,
    vibesSuccess,
    vibesFailure,
    feelsSuccess,
    feelsFailure,
    danceFailure,
    danceSuccess,
    motivateFailure,
    motivateSuccess,
    deleteSongFailure,
    deleteSongSuccess,
    newSongFailure,
    newSongSuccess
}