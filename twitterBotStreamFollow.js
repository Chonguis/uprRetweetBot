console.log('ChonguisTwitterBot is starting...')

var Twit = require('twit')
var config = require('./config')

var T = new Twit(config)

var stream = T.stream('user')

stream.on('follow', followed)

// Just looking at the event but I could tweet back!
function followed(eventMsg) {
  console.log('Follow event!')
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('I was followed by: ' + name + ' ' + screenName);
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
