// Testimonial Slider (Slick)
$(document).ready(function(){
  $('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true
  });

  // YouTube Video Modal
  const videoThumbnail = document.getElementById('videoThumbnail');
  const playButton = document.getElementById('playButton');
  const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
  const youtubeVideo = document.getElementById('youtubeVideo');

  playButton.addEventListener('click', () => {
    youtubeVideo.src = "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1";
    videoModal.show();
  });

  // Close modal on hide
  document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
    youtubeVideo.src = "";
  });

  // Temporary JS check (replace with PHP later)
function checkAuth() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

// Example usage:
document.querySelector('.like-btn').addEventListener('click', () => {
  if (!checkAuth()) {
    alert('Please login to like posts');
    return;
  }
  // Like logic...
});

  /* Login Modal Trigger (Add to JS) */
document.getElementById('loginBtn').addEventListener('click', () => {
  // Will show login modal (see next step)
  alert('Login modal will appear here - integrate with PHP later');
});

  // Booking Form Submission
  document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking request submitted! We’ll contact you shortly.');
    // Integrate Google Calendar API here later
  });

  // Like/Dislike Buttons (Demo)
  document.querySelectorAll('.like-btn, .dislike-btn').forEach(button => {
    button.addEventListener('click', function() {
      const isLike = this.classList.contains('like-btn');
      const countElement = this.querySelector('i').nextSibling;
      let count = parseInt(countElement.nodeValue.trim());
      countElement.nodeValue = isLike ? ` ${count + 1}` : ` ${count + 1}`;
    });
  });
});