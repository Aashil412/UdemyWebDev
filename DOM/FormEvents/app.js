const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newLi = document.createElement("li");
    newLi.innerText =
        tweetForm.elements.username.value + "  - "+ 
        tweetForm.elements.tweet.value;
        document.querySelector('#tweets').append(newLi);
    
        tweetForm.elements.tweet.value = ' ';
});

// const addTweet = (username, tweet) => {
//     document.querySelector('#tweets').append(newLi);
// }
