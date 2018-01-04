// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function() {
  var tweetForm = document.querySelector('#new_tweet')
  tweetForm.addEventListener('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: this.getAttribute('action'),
      method: this.getAttribute('method'),
      dataType: "json",
      data: $(this).serialize()
    }).done(function(data){
      var newTweet= document.createElement('li')
      var newTweetMessage=document.createElement('p')
      var newTweetTime=document.createElement('time')
      newTweetMessage.innerHTML = data.message;
      newTweetTime.innerHTML = data.created_at;
      newTweet.append(newTweetMessage);
      newTweet.append(newTweetTime);
      newTweet.className = 'tweet'
      var message = document.querySelector('#tweet_message');
      message.value = ""
      var list = document.querySelector('.tweets')
      list.prepend(newTweet)
    })
  })

});
