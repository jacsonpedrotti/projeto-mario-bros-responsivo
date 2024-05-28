document.addEventListener('DOMContentLoaded', () => playMusic(songsList[0]));

const buttonContact = document.querySelector('#btn-contact');
const form = document.querySelector('#form');
const maskForm = document.querySelector('.mask-form');

const songsList = [
    {
        name: 'Mário - Underwater',
        src: './assets/audio/Mario World - Underwater Lo-Fi.mp3'
    },
    {
        name: 'Mário - Yahoo!',
        src: './assets/audio/Mario - Sound Yahoo.mp3'
    }
];

function playMusic(song) {
    let audio = new Audio(song.src);
    audio.loop = true;
    audio.volume = .1;
    audio.play();
}

function showForm() {
    form.style.left = '50%'
    maskForm.style.display = 'block'
}

function hideForm(song) {
    form.style.left = '-165px'
    maskForm.style.display = 'none'

    let audio = new Audio(song.src)
    audio.volume = .3
    audio.play()
}

maskForm.addEventListener('click', () => hideForm(songsList[1]))
buttonContact.addEventListener('click', showForm)
