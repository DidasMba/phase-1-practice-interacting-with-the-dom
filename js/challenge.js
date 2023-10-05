// Add this code to challenge.js
document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("counter");
  
    // Function to increment the counter
    function incrementCounter() {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
  
    // Start the timer
    const interval = setInterval(incrementCounter, 1000);
  });
  

  // Add this code to challenge.js
document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
  
    // Function to increment the counter
    function incrementCounter() {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
  
    // Function to decrement the counter
    function decrementCounter() {
      counter.innerText = parseInt(counter.innerText) - 1;
    }
  
    // Start the timer
    const interval = setInterval(incrementCounter, 1000);
  
    // Add click event listeners to plus and minus buttons
    plusButton.addEventListener("click", incrementCounter);
    minusButton.addEventListener("click", decrementCounter);
  });
  
  // Add this code to challenge.js
document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("counter");
    const heartButton = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
  
    // Function to handle liking a number
    function likeNumber() {
      const currentNumber = parseInt(counter.innerText);
      const existingLike = likesList.querySelector(`li[data-num="${currentNumber}"]`);
  
      if (existingLike) {
        const likeCountSpan = existingLike.querySelector("span");
        likeCountSpan.innerText = parseInt(likeCountSpan.innerText) + 1;
      } else {
        const newLike = document.createElement("li");
        newLike.setAttribute("data-num", currentNumber);
        newLike.innerHTML = `${currentNumber} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
      }
    }
  
    // Add click event listener to the heart button
    heartButton.addEventListener("click", likeNumber);
  });

  // Add this code to challenge.js
document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("counter");
    const pauseButton = document.getElementById("pause");
    const buttonsToDisable = document.querySelectorAll("button:not(#pause)");
    let isPaused = false;
    let interval;
  
    // Function to toggle pause
    function togglePause() {
      if (isPaused) {
        interval = setInterval(incrementCounter, 1000);
        pauseButton.innerText = "pause";
      } else {
        clearInterval(interval);
        pauseButton.innerText = "resume";
      }
  
      buttonsToDisable.forEach((button) => {
        button.disabled = isPaused;
      });
  
      isPaused = !isPaused;
    }
  
    // Start the timer
    interval = setInterval(incrementCounter, 1000);
  
    // Add click event listener to the pause button
    pauseButton.addEventListener("click", togglePause);
  });
  
  // Add this code to challenge.js
document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("list");
  
    // Function to handle form submission
    function submitComment(event) {
      event.preventDefault();
      const commentText = commentInput.value.trim();
  
      if (commentText) {
        const commentParagraph = document.createElement("p");
        commentParagraph.innerText = commentText;
        commentsList.appendChild(commentParagraph);
        commentInput.value = "";
      }
    }
  
    // Add submit event listener to the comment form
    commentForm.addEventListener("submit", submitComment);
  });
  
  