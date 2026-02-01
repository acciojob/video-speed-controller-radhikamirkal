// Select elements exactly as Cypress expects
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const skip = document.querySelector('.skip');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');

// Play / Pause toggle
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updateToggle() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

// Scrub video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Rewind 10s
function rewindVideo() {
  video.currentTime -= 10;
}

// Skip 25s
function skipVideo() {
  video.currentTime += 25;
}

// Volume control
function handleVolume() {
  video.volume = this.value;
}

// Playback speed control
function handlePlaybackSpeed() {
  video.playbackRate = this.value;
}

// Event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);
video.addEventListener('timeupdate', handleProgress);

rewind.addEventListener('click', rewindVideo);
skip.addEventListener('click', skipVideo);

volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handlePlaybackSpeed);

progress.addEventListener('click', scrub);
