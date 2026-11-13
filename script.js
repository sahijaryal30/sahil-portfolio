 // Showreel: hide the big play button once the video starts, show it again when paused
 const video = document.getElementById('reelVideo'),
     playBtn = document.getElementById('playBtn');
 video.controls = false;
 playBtn.addEventListener('click', () => { video.controls = true;
     video.play(); });
 video.addEventListener('play', () => playBtn.classList.add('hidden'));
 video.addEventListener('pause', () => { if (!video.ended) return;
     playBtn.classList.remove('hidden'); });
 video.addEventListener('ended', () => { video.controls = false;
     playBtn.classList.remove('hidden'); });

 const btn = document.getElementById('menuBtn'),
     menu = document.getElementById('menu');
 btn.addEventListener('click', () => {
     const open = menu.classList.toggle('open');
     btn.setAttribute('aria-expanded', open);
 });