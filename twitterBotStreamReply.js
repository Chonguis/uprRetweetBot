console.log('replierBot is starting...')

var Twit = require('twit')
var config = require('./config')

var T = new Twit(config)

var stream = T.stream('user')

stream.on('tweet', tweetEvent)

function tweetEvent(eventMsg) {
  // var fs = require('fs');
  // var json = JSON.stringify(eventMsg,null,2);
  // fs.writeFile("tweet.json", json);
  var inReplyToScreenName = eventMsg.in_reply_to_screen_name
  var replyTo = eventMsg.user.screen_name

  if(inReplyToScreenName === 'chonguisTwitBot'){
    var newTweet = '@' + replyTo + ' thanks for tweeting me!'
    tweetIt(newTweet)
  }
}

function tweetIt(txt){
  tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted)

  function tweeted(err, data, response){
    if(err){
      console.log('It did not work!');
    }else{
      console.log('It worked!');
    }
  }
}
