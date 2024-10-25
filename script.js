document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').style.right = '0';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.nav-menu').style.right = '-100%';
});
    const playButton = document.getElementById('play-video');
    const videoPopup = document.getElementById('video-popup');
    const closePopup = document.getElementById('close-popup');

    playButton.addEventListener('click', function(event) {
        event.preventDefault();
        videoPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        videoPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === videoPopup) {
            videoPopup.style.display = 'none';
        }
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function moveSlide(direction) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
    }