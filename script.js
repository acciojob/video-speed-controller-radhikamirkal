// Query elements
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const skip = document.querySelector('.skip');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');

// ---- FUNCTIONS ----

function togglePlay() {
  if (!video) return;
  video.paused ? video.play() : video.pause();
}

function updateToggle() {
  if (!toggle || !video) return;
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function handleProgress() {
  if (!progressBar || !video) return;
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percent + '%';
}

function scrub(e) {
  if (!progress || !video) return;
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function rewindVideo() {
  if (!video) return;
  video.currentTime -= 10;
}

function skipVideo() {
  if (!video) return;
  video.currentTime += 25;
}

// ---- EVENT LISTENERS (GUARDED) ----

if (video) {
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateToggle);
  video.addEventListener('pause', updateToggle);
  video.addEventListener('timeupdate', handleProgress);
}

if (toggle) toggle.addEventListener('click', togglePlay);
if (rewind) rewind.addEventListener('click', rewindVideo);
if (skip) skip.addEventListener('click', skipVideo);

if (volume) {
  volume.addEventListener('input', function () {
    video.volume = this.value;
  });
}

if (playbackSpeed) {
  playbackSpeed.addEventListener('input', function () {
    video.playbackRate = this.value;
  });
}

if (progress) {
  progress.addEventListener('click', scrub);
}
