console.log('ChonguisTwitterBot is starting...')

var Twit = require('twit')
var config = require('./config')

var T = new Twit(config)

tweet = { status: 'hello Chonguis!' }

T.post('statuses/update', tweet, tweeted)

function tweeted(err, data, response){
  if(err){
    console.log('It did not work!');
  }else{
    console.log('It worked!');
  }
}
