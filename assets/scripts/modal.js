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

        const addToPlaylist = document.createElement('button')
        addToPlaylist.innerHTML = 'add to playlist'
        addToPlaylist.className = 'add-song-btn'
        addToPlaylist.style = "margin-left: 90%;"
        contentContainer.append(addToPlaylist)
        // addToPlaylist.addEventListener('click', this.submit.bind(this))
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

console.log("here is the song: ", ui.song)

$('table').on('click', '.pl-btn', (event) => {

    console.log("the event is..", event.target)

    var songID = $(event.target).closest('tr').find('td.id').html();
    var songTitle = $(event.target).closest('tr').find('td.title').html();
    var songArtist = $(event.target).closest('tr').find('td.artist').html();
    var songBPM = $(event.target).closest('tr').find('td.bpm').html();
    var songURL = $(event.target).closest('tr').find('td.bpm').html();


    // this is form that will be created upon opening a modal for a song
    var form = "<form> <input name="+"song[title]"+" value='"  + songTitle + "'>" + "<input id=" + "artist" + songID + " type="+"text"+ "name="+"song[artist]"+" value='" + songArtist +"'>" + "<input id="+"bpm" + songID + "type="+"integer"+ "name="+"song[BPM]"+ "value='" + songBPM + "'"+ "><input id="+"'url"+ songID +"' type="+"text"+" name="+"song[url]"+" value='"+ songURL +"'> </form>"

    // below is where music data will be appended
    m.html = "<b>ADD TO PLAYLIST</b>" + "<br> <br>" + "<b>title - </b>" + songTitle + "<br>" + "<b>artist - </b>" + songArtist + "<br>"  + form



    console.log(form)
    // this is the trigger that makes the button open a modal

    m.open()
})




// function openModal() {
//     // below is where music data will be appended
//     m.html = "ADD TO PLAYLIST"
//     // this is the trigger that makes the button open a modal
//     m.open()
//   }
