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

document.getElementById('addsongbtn').addEventListener('click', () => {

    const songTitle = document.querySelector('html body div table tbody#song-table tr.song td#title').innerHTML
    const songArtist = document.querySelector('html body div table tbody#song-table tr.song td#artist').innerHTML
    const songBPM = document.querySelector('html body div table tbody#song-table tr.song td#bpm').innerHTML
    const songURL = document.querySelector('html body div table tbody#song-table tr.song td#url').innerHTML



    // below is where music data will be appended

    m.html = "<b>ADD TO PLAYLIST</b>" + "<br> <br>" + "<b>title - </b>" + songTitle + "<br>" + "<b>artist - </b>" + songArtist + "<br>" + "<b>bpm - </b>" + songBPM + "<br>" + "<b>url - </b>" + songURL + "<br><br>"

    // this is the trigger that makes the button open a modal
    m.open()
})

// function openModal() {
//     // below is where music data will be appended
//     m.html = "ADD TO PLAYLIST"
//     // this is the trigger that makes the button open a modal
//     m.open()
//   }

module.export = Modal