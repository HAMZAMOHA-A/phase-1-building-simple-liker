// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.getElementById('heart');
const errorModal = document.getElementById('error-modal');

errorModal.classList.add('hidden');


heart.addEventListener('click', () => {
  if (heart.classList.contains('activated-heart')) {
    heart.classList.remove('activated-heart');
  } else {
    mimicServerCall()
      .then(() => {
        heart.classList.add('activated-heart');
      })
      .catch((error) => {
        errorModal.classList.remove('hidden');
        errorModal.innerText = error; 
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  }
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
