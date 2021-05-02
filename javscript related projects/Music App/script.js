const musicContainer = document.querySelector('.music-container')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const playBtn = document.querySelector('#play')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')




// songs
const songs = ['bbno y2k-lalala', 'DJ snack-let me lover you', 'Justin Beiber-Better with you', 'Rauf Faik-это ли счастье', 'Shawn Mendes-Camila Cabello  Señorita', 'ZAYN-Dusk Till Dawn']


// keep track of our song by index 
let songIndex = 1;


// Initially load the song in the DOM 
loadSong(songs[songIndex]);



//update the song 
function loadSong(song) {
    title.innerText = song;

    audio.src = `music/${song}.mp3`;

    cover.src = `imgs/${song}.JPG`;
}


//controls
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
    audio.play();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
    audio.play();
}

function updateProgress(e) {
    const { currentTime, duration } = e.srcElement;

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);