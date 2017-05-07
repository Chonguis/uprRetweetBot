console.log('ChonguisTwitterBot is starting...')

var Twit = require('twit')
var config = require('./config')

var T = new Twit(config)

var params = { q: 'robertito chong', count: 5 }

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses
  for(var i = 0; i < tweets.length; i++){
    console.log(tweets[i].text)
  }
}
