

  const videoCards = document.querySelectorAll('.review-video-card video');

  
  videoCards.forEach(video => {
    
    video.addEventListener('mouseenter', function() {
      video.play();
    });

    video.addEventListener('mouseleave', function() {
      video.pause();
    });
  });

