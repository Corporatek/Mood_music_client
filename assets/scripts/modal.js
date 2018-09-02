class Modal {
    constructor () {
        this.modalContainer = document.createElement('div')
        this.modalContainer.className = 'modal'
        document.body.appendChild(this.modalContainer)

        const contentContainer = document.createElement('div')
        contentContainer.className = 'container'
        this.modalContainer.appendChild(contentContainer)

        this.content = document.createElement('div')
        contentContainer.appendChild(this.content)

        const closeButton = document.createElement('button')
        closeButton.innerHTML = 'close'
        closeButton.className = 'close-button'
        contentContainer.append(closeButton)
        closeButton.addEventListener('click', this.close.bind(this))

        const paydayPlaylist = document.createElement('button')
        paydayPlaylist.innerHTML = 'payday'
        paydayPlaylist.className = 'add-song-btn'
        paydayPlaylist.value = '1'
        paydayPlaylist.style = "margin-left: 90%;"
        contentContainer.append(paydayPlaylist)
        // paydayPlaylist.addEventListener('click', this.submit.bind(this))
        const vibesPlaylist = document.createElement('button')
        vibesPlaylist.innerHTML = 'vibes'
        vibesPlaylist.className = 'add-song-btn'
        vibesPlaylist.value = '2'
        vibesPlaylist.style = "margin-left: 90%;"
        contentContainer.append(vibesPlaylist)

        const feelsPlaylist = document.createElement('button')
        feelsPlaylist.innerHTML = 'feels'
        feelsPlaylist.className = 'add-song-btn'
        feelsPlaylist.value = '3'
        feelsPlaylist.style = "margin-left: 90%;"
        contentContainer.append(feelsPlaylist)

        const dancePlaylist = document.createElement('button')
        dancePlaylist.innerHTML = 'dance'
        dancePlaylist.className = 'add-song-btn'
        dancePlaylist.value = '4'
        dancePlaylist.style = "margin-left: 90%;"
        contentContainer.append(dancePlaylist)

        const motivatePlaylist = document.createElement('button')
        motivatePlaylist.innerHTML = 'motivate'
        motivatePlaylist.className = 'add-song-btn'
        motivatePlaylist.value = '5'
        motivatePlaylist.style = "margin-left: 90%;"
        contentContainer.append(motivatePlaylist)
    }

    set html (value) {
        this.content.innerHTML = value
        // right here is where we will populate the modal with this songs information
    }

    open () {
        this.modalContainer.classList.add('open')
    }

    close () {
        this.modalContainer.classList.remove('open')
    }
}


let i = 0,
m = new Modal()

// var rows = document.getElementsByClassName('pl-btn')


const ui = require('./auth/ui')
const api = require('./auth/api')
const store = require('./store')

// console.log("here is the song: ", ui.song)

// DELETE BUTTON
$('table').on('click', '.pl-delete-btn', (event) => {
    event.preventDefault()
    console.log('deleteing song...', data)
  
    const ID = $(event.target).closest('tr').attr('data-id')

    store.playlist_id = null

    // console.log("TESINGNGGSGD: ", store.playlist_id)

  
    var data = {
      "song": {
        "id": ID,
        "playlist": store.playlist_id,
        "playlist_id": store.playlist_id
      }
    }
  
    // console.log(data)
  
    api.deleteSong(data)
        .then(ui.deleteSongSuccess)
        .catch(ui.deleteSongFailure)
    
  })


// OPEN MODAL BUTTON
$('table').on('click', '.pl-btn', (event) => {

    // console.log("the event is..", event.target)

    var songID = $(event.target).closest('tr').attr('data-id')
    var songTitle = $(event.target).closest('tr').find('td.title').html();
    var songArtist = $(event.target).closest('tr').find('td.artist').html();
    var songBPM = $(event.target).closest('tr').find('td.bpm').html();
    var songURL = $(event.target).closest('tr').find('td.url').html();

    var URL = $(event.target).closest('tr').attr('src')
    // console.log('video url: ', URL)
   
    // below is where music data will be appended
    var html = "<b>ADD TO PLAYLIST</b>" + "<br> <br>" + "<b>song id - </b>" + songID + "<br>" + "<b>title - </b>" + songTitle + "<br>" + "<b>artist - </b>" + songArtist + "<br> <br>"
    var urlBeg = `<iframe width="560" height="315" src="`
    var urlEnd = `?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
    m.html = html + urlBeg + URL + urlEnd
    // this is the trigger that makes the button open a modal
    m.open()


    store.id = songID
    
    // console.log("store object: ", store)

})


// ADD SONG TO PLAYLIST BUTTON + FUNCTION
$('.add-song-btn').on('click', (event) => {

// Get the playlist id for the playlist button clicked
var playlistBtn = $(event.target).attr('value')

// Append playlist id into an object that could be inputted into the json data object

// console.log(playlistBtn)


const ID = store.id
// console.log(ID)
var addsong = api.addSong


// this is form that will be created upon opening a modal for a song
var data = {
    "song": {
        "playlist_id": playlistBtn,
        "id": ID
    }
}

// console.log(data)
    
// BELOW SENDS THE DATA TO BE PATCHED. THE SONG WILL HAVE A NEW PLAYLIST ID. IT WILL BE AFFILIATED WITH THE PLAYLIST SELECTED
   
var adding = function (data) {
    addsong(data)
        .then(ui.addSongSuccess)
        .catch(ui.addSongFailure)

}
adding(data)
m.close()

    })


// function openModal() {
//     // below is where music data will be appended
//     m.html = "ADD TO PLAYLIST"
//     // this is the trigger that makes the button open a modal
//     m.open()
//   }
